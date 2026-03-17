'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { toast } from 'sonner'
import { Plus, Pencil, Trash2, ImageIcon } from 'lucide-react'

interface HeroSlide {
  _id: string
  title: string
  subtitle: string
  image: { url: string; publicId: string }
  buttonText?: string
  buttonLink?: string
  order: number
  active: boolean
}

export default function HeroSlidesPage() {
  const [slides, setSlides] = useState<HeroSlide[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteId, setDeleteId] = useState<string | null>(null)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    fetchSlides()
  }, [])

  const fetchSlides = async () => {
    try {
      const res = await fetch('/api/hero-slides?active=false')
      const data = await res.json()
      setSlides(data)
    } catch (error) {
      console.error('Error fetching slides:', error)
      toast.error('Failed to load slides')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (!deleteId) return
    setDeleting(true)

    try {
      const res = await fetch(`/api/hero-slides/${deleteId}`, {
        method: 'DELETE',
      })

      if (res.ok) {
        setSlides(slides.filter((s) => s._id !== deleteId))
        toast.success('Slide deleted successfully')
      } else {
        toast.error('Failed to delete slide')
      }
    } catch (error) {
      console.error('Error deleting slide:', error)
      toast.error('Failed to delete slide')
    } finally {
      setDeleting(false)
      setDeleteId(null)
    }
  }

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-serif text-3xl text-foreground">Hero Slides</h1>
          <p className="text-muted-foreground mt-1">
            Manage your homepage slider images
          </p>
        </div>
        <Link href="/admin/hero-slides/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Slide
          </Button>
        </Link>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <Card key={i}>
              <Skeleton className="aspect-video" />
              <CardContent className="p-4 space-y-2">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : slides.length === 0 ? (
        <div className="text-center py-20 bg-secondary/30 rounded-lg">
          <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-muted-foreground text-lg mb-4">
            No hero slides yet
          </p>
          <Link href="/admin/hero-slides/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Your First Slide
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {slides.map((slide) => (
            <Card key={slide._id} className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={slide.image.url}
                  alt={slide.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <Badge variant={slide.active ? 'default' : 'secondary'}>
                    {slide.active ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                  {slide.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {slide.subtitle}
                </p>
                <div className="flex gap-2">
                  <Link href={`/admin/hero-slides/${slide._id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Pencil className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => setDeleteId(slide._id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Delete Confirmation */}
      <AlertDialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Slide</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this slide? This action cannot be
              undone and the image will be removed from Cloudinary.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={deleting}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {deleting ? 'Deleting...' : 'Delete'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
