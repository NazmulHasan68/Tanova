import mongoose, { Schema, Document } from 'mongoose'

export interface IContact extends Document {
  name: string
  email: string
  company?: string
  phone?: string
  subject: string
  message: string
  productInterest?: string
  status: 'new' | 'read' | 'replied' | 'archived'
  notes?: string
  createdAt: Date
  updatedAt: Date
}

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String },
    phone: { type: String },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    productInterest: { type: String },
    status: { 
      type: String, 
      enum: ['new', 'read', 'replied', 'archived'],
      default: 'new'
    },
    notes: { type: String },
  },
  { timestamps: true }
)

export default mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema)
