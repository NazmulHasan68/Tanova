import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import HeroSlide from '@/models/HeroSlide'
import { getSession } from '@/lib/auth'
import { deleteImage } from '@/lib/cloudinary'

export async function GET(request: Request) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const active = searchParams.get('active')
    
    const query: Record<string, unknown> = {}
    if (active !== 'false') {
      query.active = true
    }

    const slides = await HeroSlide.find(query).sort({ order: 1, createdAt: -1 })
    
    return NextResponse.json(slides)
  } catch (error) {
    console.error('Get hero slides error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch hero slides' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession()
    if (!session?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()

    const data = await request.json()
    
    // Get max order
    const maxOrderSlide = await HeroSlide.findOne().sort({ order: -1 })
    const order = maxOrderSlide ? maxOrderSlide.order + 1 : 0

    const slide = await HeroSlide.create({
      ...data,
      order,
    })

    return NextResponse.json(slide, { status: 201 })
  } catch (error) {
    console.error('Create hero slide error:', error)
    return NextResponse.json(
      { error: 'Failed to create hero slide' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getSession()
    if (!session?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()

    const { id } = await request.json()
    
    const slide = await HeroSlide.findById(id)
    
    if (!slide) {
      return NextResponse.json({ error: 'Slide not found' }, { status: 404 })
    }

    // Delete image from Cloudinary
    if (slide.image?.publicId) {
      await deleteImage(slide.image.publicId)
    }

    await HeroSlide.findByIdAndDelete(id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete hero slide error:', error)
    return NextResponse.json(
      { error: 'Failed to delete hero slide' },
      { status: 500 }
    )
  }
}
