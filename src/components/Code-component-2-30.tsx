export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center justify-center w-10 h-10 bg-[#14b1b2] rounded-lg">
              <span className="text-white font-semibold text-lg">K</span>
            </div>
            <span className="ml-3 text-xl text-gray-900">KMRL</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#14b1b2] transition-colors duration-200">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-[#14b1b2] transition-colors duration-200">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-[#14b1b2] transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}