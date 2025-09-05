import { Menu, X } from "lucide-react";

interface NavbarProps {
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

export default function Navbar({
  onMenuToggle,
  isMobileMenuOpen,
}: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100 mb-6">
      <div className="mx-auto px-4 md:px-6 py-2 md:py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              onClick={onMenuToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 mr-3"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-gray-600" />
              ) : (
                <Menu size={20} className="text-gray-600" />
              )}
            </button>

            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/kmrl-logo.png"
                alt="KMRL Logo"
                className="h-16 w-auto"
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          {/* <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#14b1b2] transition-colors duration-200">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-[#14b1b2] transition-colors duration-200">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-[#14b1b2] transition-colors duration-200">
              Contact
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
