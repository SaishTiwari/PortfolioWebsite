import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Saish Tiwari. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Built with <Heart size={16} className="text-primary fill-primary" /> and code
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
