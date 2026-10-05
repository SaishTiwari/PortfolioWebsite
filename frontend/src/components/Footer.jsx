const Footer = () => {
  return (
    <footer className="py-4 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Saish Tiwari. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs flex items-center gap-2">
Backend engineering · Cloud systems
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
