export default function LoadingSkeleton() {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 animate-pulse">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
          <div>
            <div className="h-6 bg-gray-600 rounded w-24 mb-2"></div>
            <div className="h-4 bg-gray-600 rounded w-32"></div>
          </div>
        </div>
        <div className="text-right">
          <div className="h-8 bg-gray-600 rounded w-16 mb-1"></div>
          <div className="h-3 bg-gray-600 rounded w-12"></div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 bg-gray-600 rounded w-16"></div>
            <div className="h-5 bg-gray-600 rounded w-12"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
