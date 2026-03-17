# Tanova - Premium Leather Sourcing Website

A full-stack Next.js application for Tanova, a premium leather sourcing company. Features a public-facing website with dynamic content and a comprehensive admin panel for content management.

## Features

### Public Website
- **Home Page** - Dynamic hero slider, features section, and call-to-action
- **Products Page** - Filterable product gallery with categories (Leather, Shoes, Bags, Other)
- **Product Details** - Individual product pages with image gallery and auto-generated product codes
- **Chemicals Section** - Chemical products for leather processing
- **Gallery** - Dynamic image gallery with categories and lightbox
- **Contact** - Contact form with email notifications via Resend

### Admin Panel
- **Dashboard** - Overview statistics and recent activity
- **Hero Slides** - Manage homepage slider images and content
- **Products** - Full CRUD for products with multi-image upload (4-6 images per product)
- **Gallery** - Manage gallery images with categories
- **Inquiries** - View and manage contact form submissions

### Technical Features
- **Light/Dark Mode** - Toggle between light and dark themes
- **MongoDB Integration** - All data stored in MongoDB
- **Cloudinary Integration** - Image upload, optimization, and automatic deletion
- **Resend Integration** - Email notifications for contact form
- **Responsive Design** - Mobile-first design approach
- **Auto Product Codes** - Automatic unique code generation for products

## Environment Variables

Create a `.env.local` file with the following variables:

```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/tanova

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Admin Authentication
ADMIN_EMAIL=admin@tanova.com
ADMIN_PASSWORD=your_secure_password
JWT_SECRET=your_jwt_secret_key

# Resend (for email notifications)
RESEND_API_KEY=re_xxxxxxxxxxxx
```

## Setup Instructions

### 1. MongoDB Setup
1. Create a MongoDB Atlas account at [mongodb.com](https://mongodb.com)
2. Create a new cluster
3. Create a database user with read/write permissions
4. Get your connection string and add it to `MONGODB_URI`

### 2. Cloudinary Setup
1. Create a Cloudinary account at [cloudinary.com](https://cloudinary.com)
2. Go to Dashboard to find your credentials:
   - Cloud Name
   - API Key
   - API Secret
3. Add these to your environment variables

### 3. Resend Setup (Optional - for email notifications)
1. Create a Resend account at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add to `RESEND_API_KEY`
4. Note: For production, add and verify your domain in Resend

### 4. Admin Credentials
Set your desired admin email and password in the environment variables.

## Running the Application

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Cloudinary Image Deletion

When deleting products, hero slides, or gallery items, images are automatically deleted from Cloudinary. This is handled in the API routes:

- **Products**: All product images are deleted when a product is removed
- **Hero Slides**: The slide image is deleted when the slide is removed
- **Gallery**: The gallery image is deleted when the item is removed

The `deleteFromCloudinary` function in `lib/cloudinary.ts` extracts the public ID from the Cloudinary URL and deletes the image using the Cloudinary API.

## Project Structure

```
├── app/
│   ├── admin/           # Admin panel pages
│   ├── api/             # API routes
│   ├── chemicals/       # Chemicals page
│   ├── contact/         # Contact page
│   ├── gallery/         # Gallery page
│   ├── login/           # Login page
│   ├── products/        # Products pages
│   ├── globals.css      # Global styles with light/dark mode
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── admin/           # Admin components
│   ├── home/            # Home page components
│   ├── ui/              # UI components (shadcn/ui)
│   ├── footer.tsx       # Footer component
│   ├── navigation.tsx   # Navigation with theme toggle
│   └── product-card.tsx # Product card component
├── lib/
│   ├── auth.ts          # JWT authentication utilities
│   ├── cloudinary.ts    # Cloudinary upload/delete utilities
│   ├── mongodb.ts       # MongoDB connection
│   ├── resend.ts        # Email sending utilities
│   └── utils.ts         # Utility functions
├── models/
│   ├── Contact.ts       # Contact form model
│   ├── Gallery.ts       # Gallery model
│   ├── HeroSlide.ts     # Hero slide model
│   └── Product.ts       # Product model
└── README.md
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/session` - Check session status

### Products
- `GET /api/products` - Get all products
- `POST /api/products` - Create product
- `GET /api/products/[id]` - Get single product
- `PUT /api/products/[id]` - Update product
- `DELETE /api/products/[id]` - Delete product (also deletes images from Cloudinary)

### Hero Slides
- `GET /api/hero-slides` - Get all slides
- `POST /api/hero-slides` - Create slide
- `GET /api/hero-slides/[id]` - Get single slide
- `PUT /api/hero-slides/[id]` - Update slide
- `DELETE /api/hero-slides/[id]` - Delete slide (also deletes image from Cloudinary)

### Gallery
- `GET /api/gallery` - Get all gallery items
- `POST /api/gallery` - Create gallery item
- `GET /api/gallery/[id]` - Get single item
- `PUT /api/gallery/[id]` - Update item
- `DELETE /api/gallery/[id]` - Delete item (also deletes image from Cloudinary)

### Contact
- `GET /api/contact` - Get all inquiries
- `POST /api/contact` - Submit contact form (sends email via Resend)
- `PATCH /api/contact/[id]` - Update inquiry status
- `DELETE /api/contact/[id]` - Delete inquiry

### Upload
- `POST /api/upload` - Upload image to Cloudinary

## License

MIT License - Feel free to use this project for your own purposes.
