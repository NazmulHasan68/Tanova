import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import GalleryImage from '@/models/Gallery'
import { getSession } from '@/lib/auth'
import { deleteImage } from '@/lib/cloudinary'

export async function GET(request: Request) {
  try {
    await connectDB()
    
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const active = searchParams.get('active')
    
    const query: Record<string, unknown> = {}
    
    if (category && category !== 'all') {
      query.category = category
    }
    
    if (active !== 'false') {
      query.active = true
    }

    const images = await GalleryImage.find(query).sort({ order: 1, createdAt: -1 })
    
    return NextResponse.json(images)
  } catch (error) {
    console.error('Get gallery images error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch gallery images' },
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
    const maxOrderImage = await GalleryImage.findOne().sort({ order: -1 })
    const order = maxOrderImage ? maxOrderImage.order + 1 : 0

    const image = await GalleryImage.create({
      ...data,
      order,
    })

    return NextResponse.json(image, { status: 201 })
  } catch (error) {
    console.error('Create gallery image error:', error)
    return NextResponse.json(
      { error: 'Failed to create gallery image' },
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
    
    const image = await GalleryImage.findById(id)
    
    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    }

    // Delete image from Cloudinary
    if (image.image?.publicId) {
      await deleteImage(image.image.publicId)
    }

    await GalleryImage.findByIdAndDelete(id)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete gallery image error:', error)
    return NextResponse.json(
      { error: 'Failed to delete gallery image' },
      { status: 500 }
    )
  }
}
