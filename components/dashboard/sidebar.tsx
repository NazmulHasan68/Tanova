'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '@/components/auth-provider'
import { 
  LayoutDashboard, 
  Package, 
  MessageSquare, 
  LogOut,
  Menu,
  X,
  Home
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/products', label: 'Products', icon: Package },
  { href: '/dashboard/inquiries', label: 'Inquiries', icon: MessageSquare },
]

export function DashboardSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { logout, user } = useAuth()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-sidebar border-b border-sidebar-border px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl tracking-wider text-sidebar-foreground">
          TANOVA
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sidebar-foreground p-2"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 bg-background/80 z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 bottom-0 w-64 bg-sidebar border-r border-sidebar-border z-50",
          "lg:translate-x-0"
        )}
        style={{ transform: undefined }}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-sidebar-border">
            <Link href="/" className="font-serif text-2xl tracking-wider text-sidebar-foreground">
              TANOVA
            </Link>
            <p className="text-xs text-sidebar-foreground/60 mt-1 tracking-wider uppercase">
              Client Portal
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 text-sm tracking-wider transition-all duration-300",
                      pathname === item.href
                        ? "bg-sidebar-accent text-sidebar-primary"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* User & Logout */}
          <div className="p-4 border-t border-sidebar-border space-y-2">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 text-sm tracking-wider text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Back to Site
            </Link>
            
            <div className="px-4 py-3 text-xs text-sidebar-foreground/50">
              Signed in as<br />
              <span className="text-sidebar-foreground">{user?.email}</span>
            </div>
            
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm tracking-wider text-sidebar-foreground/70 hover:bg-destructive/10 hover:text-destructive transition-all duration-300"
            >
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>
          </div>
        </div>
      </motion.aside>
    </>
  )
}
