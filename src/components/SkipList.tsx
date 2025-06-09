import React from "react";
import { RefreshCw, AlertCircle, Truck } from "lucide-react";
import { useSkips } from "../hooks/useSkips";
import SkipCard from "./SkipCard";
import LoadingSkeleton from "./LoadingSkelton";
import { useFormContext } from "../context/FormContext";

const SkipList: React.FC = () => {
  const { skips, loading, error, fetchSkips } = useSkips();
  const {
    formData: { skipSelection },
    updateFormData,
  } = useFormContext();

  return (
    <div className="h-full overflow-y-auto bg-gray-900 text-white">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Skip Hire - Lowestoft (NR32)
            </h1>
            <p className="text-gray-400 mt-1">
              Available skips for hire in your area
            </p>
          </div>
          <button
            onClick={fetchSkips}
            disabled={loading}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
          >
            <RefreshCw size={16} className={loading ? "animate-spin" : ""} />
            <span>Refresh</span>
          </button>
        </div>

        {/* Content */}
        {error ? (
          <div className="flex flex-col items-center justify-center py-12">
            <AlertCircle size={48} className="text-red-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Failed to load skip data
            </h3>
            <p className="text-gray-400 mb-4 text-center max-w-md">{error}</p>
            <button
              onClick={fetchSkips}
              className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <LoadingSkeleton key={i} />
            ))}
          </div>
        ) : skips.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skips.map((skip) => (
                <SkipCard
                  key={skip.id}
                  skip={skip}
                  selected={!!skipSelection && skipSelection === skip.id}
                  onSelect={(selectedId) =>
                    updateFormData({ skipSelection: selectedId })
                  }
                />
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <Truck size={48} className="text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              No skips found
            </h3>
            <p className="text-gray-400">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkipList;
