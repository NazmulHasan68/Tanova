'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ImageUpload } from '@/components/admin/image-upload'
import { toast } from 'sonner'
import { ArrowLeft, Loader2 } from 'lucide-react'

interface GalleryImage {
  _id?: string
  title: string
  description: string
  image: { url: string; publicId: string } | null
  category: string
  active: boolean
}

const categories = [
  { value: 'general', label: 'General' },
  { value: 'leather', label: 'Leather' },
  { value: 'production', label: 'Production' },
  { value: 'factory', label: 'Factory' },
  { value: 'products', label: 'Products' },
]

export default function GalleryFormPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const isNew = id === 'new'
  const router = useRouter()

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState<GalleryImage>({
    title: '',
    description: '',
    image: null,
    category: 'general',
    active: true,
  })

  useEffect(() => {
    if (!isNew) {
      fetchImage()
    }
  }, [id, isNew])

  const fetchImage = async () => {
    try {
      const res = await fetch(`/api/gallery/${id}`)
      if (res.ok) {
        const data = await res.json()
        setFormData(data)
      } else {
        toast.error('Image not found')
        router.push('/admin/gallery')
      }
    } catch (error) {
      console.error('Error fetching image:', error)
      toast.error('Failed to load image')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.image) {
      toast.error('Please upload an image')
      return
    }

    setSaving(true)

    try {
      const url = isNew ? '/api/gallery' : `/api/gallery/${id}`
      const method = isNew ? 'POST' : 'PUT'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success(isNew ? 'Image added successfully' : 'Image updated successfully')
        router.push('/admin/gallery')
      } else {
        const data = await res.json()
        toast.error(data.error || 'Failed to save image')
      }
    } catch (error) {
      console.error('Error saving image:', error)
      toast.error('Failed to save image')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="p-6 md:p-8 flex items-center justify-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="p-6 md:p-8 max-w-4xl">
      <div className="mb-8">
        <Link href="/admin/gallery">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Gallery
          </Button>
        </Link>
        <h1 className="font-serif text-3xl text-foreground">
          {isNew ? 'Add New Image' : 'Edit Image'}
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Image</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageUpload
                value={formData.image}
                onChange={(image) => setFormData({ ...formData, image })}
                folder="tanova/gallery"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Image Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter image title"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description (Optional)</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Brief description of the image"
                  rows={3}
                />
              </div>

              <div className="flex items-center gap-2">
                <Switch
                  id="active"
                  checked={formData.active}
                  onCheckedChange={(checked) => setFormData({ ...formData, active: checked })}
                />
                <Label htmlFor="active">Active</Label>
              </div>
            </CardContent>
          </Card>

          <div className="flex gap-4">
            <Button type="submit" disabled={saving}>
              {saving ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                isNew ? 'Add Image' : 'Update Image'
              )}
            </Button>
            <Link href="/admin/gallery">
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}
