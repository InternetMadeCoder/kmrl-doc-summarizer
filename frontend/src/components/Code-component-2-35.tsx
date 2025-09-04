export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="mb-6 flex justify-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-200 border-t-[#14b1b2]"></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-600">
          Processing your document…
        </p>
      </div>
    </div>
  );
}