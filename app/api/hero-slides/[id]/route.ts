import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import HeroSlide from '@/models/HeroSlide'
import { getSession } from '@/lib/auth'
import { deleteImage } from '@/lib/cloudinary'

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession()
    if (!session?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const { id } = await params
    const data = await request.json()

    // Check if image was changed and delete old one from Cloudinary
    const existingSlide = await HeroSlide.findById(id)
    if (existingSlide && data.image && existingSlide.image?.publicId !== data.image.publicId) {
      await deleteImage(existingSlide.image.publicId)
    }

    const slide = await HeroSlide.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    )

    if (!slide) {
      return NextResponse.json({ error: 'Slide not found' }, { status: 404 })
    }

    return NextResponse.json(slide)
  } catch (error) {
    console.error('Update hero slide error:', error)
    return NextResponse.json(
      { error: 'Failed to update hero slide' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const session = await getSession()
    if (!session?.isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await connectDB()
    const { id } = await params

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
