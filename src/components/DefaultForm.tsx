import React from "react";

interface DefaultFormProps {
  children: React.ReactNode;
  onBack: () => void;
  onNext: () => void;
  isBackDisabled?: boolean;
  isNextDisabled?: boolean;
  backLabel?: string;
  nextLabel?: string;
}

const DefaultForm: React.FC<DefaultFormProps> = ({
  children,
  onBack,
  onNext,
  isBackDisabled = false,
  isNextDisabled = false,
  backLabel = "Back",
  nextLabel = "Next",
}) => {
  return (
    <div className="flex flex-col h-full">
      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 bg-yellow-100">{children}</div>
    </div>
  );
};

export default DefaultForm;
