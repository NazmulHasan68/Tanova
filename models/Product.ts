import mongoose, { Schema, Document } from 'mongoose'

export interface IProductImage {
  url: string
  publicId: string
}

export interface IProduct extends Document {
  code: string
  name: string
  category: string
  description: string
  shortDescription: string
  images: IProductImage[]
  specifications: {
    material?: string
    thickness?: string
    finish?: string
    origin?: string
    color?: string
    [key: string]: string | undefined
  }
  featured: boolean
  active: boolean
  createdAt: Date
  updatedAt: Date
}

const ProductImageSchema = new Schema({
  url: { type: String, required: true },
  publicId: { type: String, required: true },
})

const ProductSchema = new Schema<IProduct>(
  {
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    category: { 
      type: String, 
      required: true,
      enum: ['leather', 'shoes', 'bags', 'chemicals', 'other']
    },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    images: { type: [ProductImageSchema], default: [], validate: [(val: IProductImage[]) => val.length <= 6, 'Maximum 6 images allowed'] },
    specifications: { type: Map, of: String, default: {} },
    featured: { type: Boolean, default: false },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema)
