import mongoose, { Schema, Document } from 'mongoose'

export interface IHeroSlide extends Document {
  title: string
  subtitle: string
  image: {
    url: string
    publicId: string
  }
  buttonText?: string
  buttonLink?: string
  order: number
  active: boolean
  createdAt: Date
  updatedAt: Date
}

const HeroSlideSchema = new Schema<IHeroSlide>(
  {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    image: {
      url: { type: String, required: true },
      publicId: { type: String, required: true },
    },
    buttonText: { type: String, default: 'Explore Collection' },
    buttonLink: { type: String, default: '/products' },
    order: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
)

export default mongoose.models.HeroSlide || mongoose.model<IHeroSlide>('HeroSlide', HeroSlideSchema)
