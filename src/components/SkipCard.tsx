import React from "react";
import {
  Calendar,
  PoundSterling,
  Ban,
  Truck,
  Weight,
  CheckCircle,
  XCircle,
  Info,
  Check,
} from "lucide-react";
import type Skip from "../models/Skip";

interface Props {
  skip: Skip;
  onSelect?: (id: number) => void;
  selected?: boolean;
}

const SkipCard: React.FC<Props> = ({ skip, onSelect, selected }) => {
  const totalPrice = skip.price_before_vat + skip.vat;

  const indicator = (icon: React.ReactNode, label: string, isTrue: boolean) => {
    const colorClass: String = isTrue
      ? "bg-green-100 text-green-700 border-green-400"
      : "bg-red-100 text-red-700 border-red-400";

    return (
      <div className="flex items-center gap-1 text-sm">
        <div className={`p-1 rounded-full border ${colorClass}`}>{icon}</div>
        <span className="text-gray-300">{label}</span>
      </div>
    );
  };

  return (
    <div
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
          <span>£{totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <hr className="my-4 border-gray-700" />

      {/* Availability Flags */}
      <div className="flex justify-between gap-3 mb-6 flex-wrap text-gray-200">
        {indicator(
          <Truck size={16} />,
          skip.allowed_on_road ? "Allowed on Road" : "Not Allowed on Road",
          skip.allowed_on_road
        )}

        {indicator(
          <Weight size={16} />,
          skip.allows_heavy_waste
            ? "Supports Heavy Waste"
            : "Does Not Support Heavy Waste",
          skip.allows_heavy_waste
        )}

        {skip.forbidden && indicator(<Ban size={16} />, "Forbidden", false)}
      </div>

      {/* Select Button */}
      <button
        onClick={() => onSelect?.(skip.id)}
        className={`mt-auto py-2 px-4 rounded-xl text-sm font-medium transition ${
          skip.forbidden
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : selected
            ? "bg-blue-700 text-white hover:bg-blue-800"
            : "bg-blue-600 hover:bg-blue-700 text-white"
        }`}
        disabled={skip.forbidden}
      >
        {skip.forbidden ? "Not Available" : selected ? "Selected" : "Select"}
      </button>
    </div>
  );
};

export default SkipCard;
