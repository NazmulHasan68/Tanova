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
import { ImageUpload } from '@/components/admin/image-upload'
import { toast } from 'sonner'
import { ArrowLeft, Loader2 } from 'lucide-react'

interface HeroSlide {
  _id?: string
  title: string
  subtitle: string
  image: { url: string; publicId: string } | null
  buttonText: string
  buttonLink: string
  active: boolean
}

export default function HeroSlideFormPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const isNew = id === 'new'
  const router = useRouter()

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState<HeroSlide>({
    title: '',
    subtitle: '',
    image: null,
    buttonText: 'Explore Collection',
    buttonLink: '/products',
    active: true,
  })

  useEffect(() => {
    if (!isNew) {
      fetchSlide()
    }
  }, [id, isNew])

  const fetchSlide = async () => {
    try {
      const res = await fetch(`/api/hero-slides/${id}`)
      if (res.ok) {
        const data = await res.json()
        setFormData(data)
      } else {
        toast.error('Slide not found')
        router.push('/admin/hero-slides')
      }
    } catch (error) {
      console.error('Error fetching slide:', error)
      toast.error('Failed to load slide')
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
      const url = isNew ? '/api/hero-slides' : `/api/hero-slides/${id}`
      const method = isNew ? 'POST' : 'PUT'

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        toast.success(isNew ? 'Slide created successfully' : 'Slide updated successfully')
        router.push('/admin/hero-slides')
      } else {
        const data = await res.json()
        toast.error(data.error || 'Failed to save slide')
      }
    } catch (error) {
      console.error('Error saving slide:', error)
      toast.error('Failed to save slide')
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
        <Link href="/admin/hero-slides">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Slides
          </Button>
        </Link>
        <h1 className="font-serif text-3xl text-foreground">
          {isNew ? 'Add New Slide' : 'Edit Slide'}
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Slide Image</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageUpload
                value={formData.image}
                onChange={(image) => setFormData({ ...formData, image })}
                folder="tanova/hero"
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Slide Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter slide title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subtitle">Subtitle</Label>
                <Textarea
                  id="subtitle"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  placeholder="Enter slide subtitle"
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="buttonText">Button Text</Label>
                  <Input
                    id="buttonText"
                    value={formData.buttonText}
                    onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
                    placeholder="Explore Collection"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="buttonLink">Button Link</Label>
                  <Input
                    id="buttonLink"
                    value={formData.buttonLink}
                    onChange={(e) => setFormData({ ...formData, buttonLink: e.target.value })}
                    placeholder="/products"
                  />
                </div>
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
                isNew ? 'Create Slide' : 'Update Slide'
              )}
            </Button>
            <Link href="/admin/hero-slides">
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
