import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import GalleryImage from '@/models/Gallery'
import { getSession } from '@/lib/auth'
import { deleteImage } from '@/lib/cloudinary'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB()
    const { id } = await params
    
    const image = await GalleryImage.findById(id)
    
    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    }

    return NextResponse.json(image)
  } catch (error) {
    console.error('Get gallery image error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch gallery image' },
      { status: 500 }
    )
  }
}

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
    const existingImage = await GalleryImage.findById(id)
    if (existingImage && data.image && existingImage.image?.publicId !== data.image.publicId) {
      await deleteImage(existingImage.image.publicId)
    }

    const image = await GalleryImage.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    )

    if (!image) {
      return NextResponse.json({ error: 'Image not found' }, { status: 404 })
    }

    return NextResponse.json(image)
  } catch (error) {
    console.error('Update gallery image error:', error)
    return NextResponse.json(
      { error: 'Failed to update gallery image' },
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
