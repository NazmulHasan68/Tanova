import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import connectDB from '@/lib/mongodb'
import Product from '@/models/Product'
import HeroSlide from '@/models/HeroSlide'
import GalleryImage from '@/models/Gallery'
import Contact from '@/models/Contact'
import { Package, Image as ImageIcon, Images, Mail, ArrowRight } from 'lucide-react'

async function getStats() {
  try {
    await connectDB()
    
    const [productCount, slideCount, galleryCount, inquiryCount, newInquiries] = await Promise.all([
      Product.countDocuments({ active: true }),
      HeroSlide.countDocuments({ active: true }),
      GalleryImage.countDocuments({ active: true }),
      Contact.countDocuments(),
      Contact.countDocuments({ status: 'new' }),
    ])

    const recentInquiries = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .lean()

    return {
      productCount,
      slideCount,
      galleryCount,
      inquiryCount,
      newInquiries,
      recentInquiries: JSON.parse(JSON.stringify(recentInquiries)),
    }
  } catch (error) {
    console.error('Error fetching stats:', error)
    return {
      productCount: 0,
      slideCount: 0,
      galleryCount: 0,
      inquiryCount: 0,
      newInquiries: 0,
      recentInquiries: [],
    }
  }
}

export default async function AdminDashboard() {
  const stats = await getStats()

  const statCards = [
    {
      title: 'Products',
      value: stats.productCount,
      icon: Package,
      href: '/admin/products',
      color: 'text-blue-500',
    },
    {
      title: 'Hero Slides',
      value: stats.slideCount,
      icon: ImageIcon,
      href: '/admin/hero-slides',
      color: 'text-green-500',
    },
    {
      title: 'Gallery Images',
      value: stats.galleryCount,
      icon: Images,
      href: '/admin/gallery',
      color: 'text-purple-500',
    },
    {
      title: 'Inquiries',
      value: stats.inquiryCount,
      icon: Mail,
      href: '/admin/inquiries',
      color: 'text-orange-500',
      badge: stats.newInquiries > 0 ? stats.newInquiries : undefined,
    },
  ]

  return (
    <div className="p-6 md:p-8">
      <div className="mb-8">
        <h1 className="font-serif text-3xl text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome to Tanova Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="hover:border-primary/50 transition-colors cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="relative">
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  {stat.badge && (
                    <span className="absolute -top-2 -right-2 h-4 w-4 text-[10px] bg-destructive text-destructive-foreground rounded-full flex items-center justify-center">
                      {stat.badge}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <Link href="/admin/products/new">
              <Button variant="outline" className="w-full justify-start">
                <Package className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </Link>
            <Link href="/admin/hero-slides/new">
              <Button variant="outline" className="w-full justify-start">
                <ImageIcon className="mr-2 h-4 w-4" />
                Add Slide
              </Button>
            </Link>
            <Link href="/admin/gallery/new">
              <Button variant="outline" className="w-full justify-start">
                <Images className="mr-2 h-4 w-4" />
                Add Image
              </Button>
            </Link>
            <Link href="/admin/inquiries">
              <Button variant="outline" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                View Inquiries
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Recent Inquiries */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Inquiries</CardTitle>
            <Link href="/admin/inquiries">
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {stats.recentInquiries.length === 0 ? (
              <p className="text-muted-foreground text-sm text-center py-4">
                No inquiries yet
              </p>
            ) : (
              <div className="space-y-4">
                {stats.recentInquiries.map((inquiry: {
                  _id: string
                  name: string
                  email: string
                  subject: string
                  status: string
                  createdAt: string
                }) => (
                  <Link
                    key={inquiry._id}
                    href={`/admin/inquiries/${inquiry._id}`}
                    className="block"
                  >
                    <div className="flex items-start justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                      <div className="min-w-0 flex-1">
                        <p className="font-medium text-foreground truncate">
                          {inquiry.name}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">
                          {inquiry.subject}
                        </p>
                      </div>
                      {inquiry.status === 'new' && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-primary/10 text-primary rounded-full">
                          New
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
