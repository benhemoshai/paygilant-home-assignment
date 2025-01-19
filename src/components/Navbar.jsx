import { Home, PlusCircle, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <nav className="bg-gradient-to-r from-blue-200 to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {/* Logo/Home */}
            <Link 
              to="/"
              className="flex items-center space-x-2 text-white hover:text-white/90 transition-colors"
            >
              <Home className="w-6 h-6" />
              <span className="font-bold text-xl">Paygilant</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link 
                to="/"
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium"
              >
                <BookOpen className="w-4 h-4" />
                <span>Posts</span>
              </Link>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Link 
              to="/new-post"
              className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium border border-white/20"
            >
              <PlusCircle className="w-4 h-4" />
              <span>New Post</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom border gradient effect */}
      <div className="h-1 bg-gradient-to-r from-white/10 via-white/20 to-white/10" />
    </nav>
  );
};

export default Navbar;