export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/kmrl-logo.png" alt="KMRL Logo" className="h-16 w-auto" />
          </div>

          {/* Navigation Links */}
          {/* <div className="flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-[#14b1b2] transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#14b1b2] transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-[#14b1b2] transition-colors duration-200"
            >
              Contact
            </a>
          </div> */}
        </div>
      </div>
    </nav>
  );
}
