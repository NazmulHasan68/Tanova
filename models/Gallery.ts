import mongoose, { Schema, Document } from 'mongoose'

export interface IGalleryImage extends Document {
  title: string
  description?: string
  image: {
    url: string
    publicId: string
  }
  category: string
  order: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}

const GalleryImageSchema = new Schema<IGalleryImage>(
  {
    title: { type: String, required: true },
    description: { type: String },
    image: {
      url: { type: String, required: true },
      publicId: { type: String, required: true },
    },
    category: { 
      type: String, 
      default: 'general',
      enum: ['general', 'leather', 'production', 'factory', 'products']
    },
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.models.GalleryImage || mongoose.model<IGalleryImage>('GalleryImage', GalleryImageSchema)
