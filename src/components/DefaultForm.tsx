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

      {/* Footer */}
      <div className="flex justify-between items-center p-4 border-t bg-white">
        <button
          onClick={onBack}
          disabled={isBackDisabled}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
        >
          {backLabel}
        </button>
        <button
          onClick={onNext}
          disabled={isNextDisabled}
          className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded disabled:opacity-50"
        >
          {nextLabel}
        </button>
      </div>
    </div>
  );
};

export default DefaultForm;
