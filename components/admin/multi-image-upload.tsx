'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Upload, X, Loader2, ImageIcon, GripVertical } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageData {
  url: string
  publicId: string
}

interface MultiImageUploadProps {
  value: ImageData[]
  onChange: (images: ImageData[]) => void
  maxImages?: number
  folder?: string
  className?: string
}

export function MultiImageUpload({ 
  value = [], 
  onChange, 
  maxImages = 6, 
  folder = 'tanova/products',
  className 
}: MultiImageUploadProps) {
  const [uploading, setUploading] = useState(false)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (value.length + acceptedFiles.length > maxImages) {
      toast.error(`Maximum ${maxImages} images allowed`)
      return
    }

    setUploading(true)
    const newImages: ImageData[] = []

    try {
      for (const file of acceptedFiles) {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('folder', folder)

        const res = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        })

        if (!res.ok) {
          throw new Error('Upload failed')
        }

        const data = await res.json()
        newImages.push(data)
      }

      onChange([...value, ...newImages])
      toast.success(`${newImages.length} image(s) uploaded successfully`)
    } catch (error) {
      console.error('Upload error:', error)
      toast.error('Failed to upload images')
    } finally {
      setUploading(false)
    }
  }, [folder, maxImages, onChange, value])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp'],
    },
    maxFiles: maxImages - value.length,
    disabled: uploading || value.length >= maxImages,
  })

  const handleRemove = async (index: number) => {
    const imageToRemove = value[index]
    
    // Delete from Cloudinary
    if (imageToRemove?.publicId) {
      try {
        await fetch('/api/upload', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ publicId: imageToRemove.publicId }),
        })
      } catch (error) {
        console.error('Error deleting image:', error)
      }
    }

    const newImages = value.filter((_, i) => i !== index)
    onChange(newImages)
  }

  const moveImage = (fromIndex: number, toIndex: number) => {
    const newImages = [...value]
    const [removed] = newImages.splice(fromIndex, 1)
    newImages.splice(toIndex, 0, removed)
    onChange(newImages)
  }

  return (
    <div className={className}>
      {/* Image Grid */}
      {value.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {value.map((image, index) => (
            <div
              key={image.publicId}
              className="relative aspect-square rounded-lg overflow-hidden bg-secondary group"
            >
              <Image
                src={image.url}
                alt={`Product image ${index + 1}`}
                fill
                className="object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => index > 0 && moveImage(index, index - 1)}
                  disabled={index === 0}
                >
                  <GripVertical className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => handleRemove(index)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Index Badge */}
              <div className="absolute top-2 left-2 px-2 py-1 bg-background/80 rounded text-xs font-medium">
                {index === 0 ? 'Main' : index + 1}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload Zone */}
      {value.length < maxImages && (
        <div
          {...getRootProps()}
          className={cn(
            "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
            isDragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50",
            uploading && "opacity-50 cursor-not-allowed"
          )}
        >
          <input {...getInputProps()} />
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <p className="text-sm text-muted-foreground">Uploading...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              {isDragActive ? (
                <Upload className="h-8 w-8 text-primary" />
              ) : (
                <ImageIcon className="h-8 w-8 text-muted-foreground" />
              )}
              <p className="text-sm text-muted-foreground">
                {isDragActive
                  ? 'Drop images here'
                  : 'Drag & drop images, or click to select'}
              </p>
              <p className="text-xs text-muted-foreground">
                {value.length}/{maxImages} images (PNG, JPG, JPEG, WebP)
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
