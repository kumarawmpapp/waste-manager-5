import React from "react";
import { Calendar, Ban, Truck, Weight, CheckCircle } from "lucide-react";
import type Skip from "../models/Skip";
import { formatPrice } from "../utilities/PriceUtilities";
import FlagIndicator from "./FlagIndicator";

interface Props {
  skip: Skip;
  onSelect?: (id: number) => void;
  selected?: boolean;
}

const SkipCard: React.FC<Props> = ({ skip, onSelect, selected }) => {
  return (
    <div
      onClick={() => onSelect?.(skip.id)}
      className={`relative bg-gray-900 border ${
        selected ? "border-blue-500" : "border-gray-800"
      } rounded-2xl p-6 shadow hover:shadow-lg transition-all flex flex-col`}
    >
      {selected && (
        <CheckCircle
          className="absolute top-3 right-3 text-blue-500"
          size={20}
        />
      )}

      {/* Size Emphasis */}
      <div className="flex flex-col items-center justify-end mb-4 flex-grow">
        <div className="text-5xl font-extrabold text-white leading-none">
          {skip.size}
        </div>
        <div className="text-sm text-gray-400">Yard Skip</div>
      </div>

      {/* Bottom Info Row */}
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2 text-gray-300">
          <Calendar size={16} />
          <span>{skip.hire_period_days} days</span>
        </div>
        <div className="flex items-center gap-2 text-green-400 justify-end">
          <span>£{formatPrice(skip.price_before_vat, skip.vat)}</span>
        </div>
      </div>
      <hr className="my-4 border-gray-700" />

      {/* Availability Flags */}
      <div className="flex justify-between gap-3 mb-6 flex-wrap text-gray-200">
        {skip.allowed_on_road && (
          <FlagIndicator
            isTrue={true}
            icon={<Truck size={16} />}
            label="Allowed on Road"
          />
        )}
        {!skip.allowed_on_road && (
          <FlagIndicator
            isTrue={false}
            icon={<Truck size={16} />}
            label="Not Allowed on Road"
          />
        )}

        {skip.allows_heavy_waste && (
          <FlagIndicator
            isTrue={true}
            icon={<Weight size={16} />}
            label="Supports Heavy Waste"
          />
        )}
        {!skip.allows_heavy_waste && (
          <FlagIndicator
            isTrue={false}
            icon={<Weight size={16} />}
            label="Does Not Support Heavy Waste"
          />
        )}

        {skip.forbidden && (
          <FlagIndicator
            isTrue={false}
            icon={<Ban size={16} />}
            label="Forbidden"
          />
        )}
      </div>
    </div>
  );
};

export default SkipCard;
