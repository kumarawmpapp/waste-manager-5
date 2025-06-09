import { Truck, Calendar, PoundSterling } from "lucide-react";
import Skip from "../models/Skip";
import { formatPrice } from "../utilities/PriceUtilities";

const getSizeColor = (size: string) => {
  const sizeNum = parseInt(size);
  if (sizeNum <= 4) return "bg-green-500";
  if (sizeNum <= 8) return "bg-yellow-500";
  if (sizeNum <= 12) return "bg-orange-500";
  return "bg-red-500";
};

export default function SkipCard({ skip }: { skip: Skip }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div
            className={`w-4 h-4 rounded-full ${getSizeColor(skip.size)}`}
          ></div>
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
              {skip.size} Skip
            </h3>
            {skip.description && (
              <p className="text-sm text-gray-400 mt-1">{skip.description}</p>
            )}
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-green-400">
            £{formatPrice(skip.price_before_vat, skip.vat)}
          </div>
          <div className="text-xs text-gray-500">inc. VAT</div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm">
        <div className="flex items-center space-x-2">
          <Truck size={16} className="text-gray-400" />
          <div>
            <div className="text-gray-400">Size</div>
            <div className="text-white font-medium">{skip.size}</div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Calendar size={16} className="text-gray-400" />
          <div>
            <div className="text-gray-400">Hire Period</div>
            <div className="text-white font-medium">
              {skip.hire_period_days} days
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <PoundSterling size={16} className="text-gray-400" />
          <div>
            <div className="text-gray-400">Before VAT</div>
            <div className="text-white font-medium">
              £{skip.price_before_vat.toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-700">
        <div className="flex justify-between text-xs text-gray-400">
          <span>VAT: £{skip.vat.toFixed(2)}</span>
          <span className="text-green-400">{skip.availability}</span>
        </div>
      </div>
    </div>
  );
}
