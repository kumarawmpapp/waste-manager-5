import React from "react";

interface FlagIndicatorProps {
  isTrue: boolean;
  label: string;
  icon: React.ReactNode;
}

const FlagIndicator: React.FC<FlagIndicatorProps> = ({
  isTrue,
  label,
  icon,
}) => {
  const baseClasses = "flex items-center gap-1 text-sm px-2 py-1";
  const trueClasses = "text-green-700";
  const falseClasses = "text-red-700";

  return (
    <div className={`${baseClasses} ${isTrue ? trueClasses : falseClasses}`}>
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default FlagIndicator;
