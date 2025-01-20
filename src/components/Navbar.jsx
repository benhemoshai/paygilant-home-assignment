import { Home, PlusCircle, BookOpen, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
<nav className="bg-gradient-to-r from-blue-300 to-blue-500 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white hover:text-white/90 transition-colors"
            >
              <Home className="w-6 h-6" />
              <span className="font-bold text-xl">Paygilant</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors px-3 py-2 rounded-md  font-medium"
            >
              <BookOpen className="w-4 h-4" />
              <span>All Posts</span>
            </Link>
            <Link
              to="/new-post"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium border border-white/20"
            >
              <PlusCircle className="w-4 h-4" />
              <span>New Post</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-white"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-blue-400/90">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu directly
              className="block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-300/20 transition"
            >
              All Posts
            </Link>
            <Link
              to="/new-post"
              onClick={() => setIsMobileMenuOpen(false)} // Close menu directly
              className="block text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-300/20 transition"
            >
              New Post
            </Link>
          </div>
        </div>
      )}

      {/* Bottom border gradient effect */}
      <div className="h-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
    </nav>
  );
}

export default Navbar;
