
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-xl font-semibold flex items-center space-x-2"
            >
              <span className="text-primary font-bold">GasConnect</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/request-service" className="nav-link">Request Service</Link>
            <Link to="/tracking" className="nav-link">Track Request</Link>
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="sm" className="px-4 btn-animated">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm" className="btn-animated">Get Started</Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/request-service"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Service
            </Link>
            <Link
              to="/tracking"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Track Request
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-5">
                <Button variant="outline" className="w-full justify-center btn-animated" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
