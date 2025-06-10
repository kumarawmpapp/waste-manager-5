import React from "react";

export interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
}

interface StepperControllerProps {
  steps: Step[];
  currentStep: number;
  onStepChange: (index: number) => void;
  canNavigateToStep: (step: number) => boolean;
  children?: React.ReactNode;
}

export default function StepperController({
  steps,
  currentStep,
  onStepChange,
  canNavigateToStep,
}: StepperControllerProps) {
  const handleChange = (stepId: number) => {
    if (canNavigateToStep(stepId)) {
      onStepChange(stepId);
    }
  };

  return (
    <div className="w-full">
      {/* Mobile dropdown */}
      <div className="block md:hidden mb-4">
        <select
          className="w-full bg-gray-900 text-white border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={currentStep}
          onChange={(e) => handleChange(Number(e.target.value))}
        >
          {steps.map((step) => (
            <option key={step.id} value={step.id}>
              {step.title}
            </option>
          ))}
        </select>
      </div>
      {/* Desktop vertical stepper */}
      <div className="hidden md:flex flex-col space-y-2">
        {steps.map((step) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;
          const isDisabled = !canNavigateToStep(step.id);

          return (
            <button
              key={step.id}
              onClick={() => handleChange(step.id)}
              disabled={isDisabled}
              className={`flex items-center gap-3 p-3 text-left rounded-lg border transition-all
            ${
              isActive
                ? "bg-blue-600 text-white border-blue-600 shadow"
                : isCompleted
                ? "bg-green-600 text-white border-green-600"
                : isDisabled
                ? "bg-gray-800 text-gray-500 border-gray-700 cursor-not-allowed"
                : "bg-gray-900 text-gray-200 border-gray-700 hover:bg-gray-800"
            }
          `}
            >
              <div className="shrink-0">{step.icon}</div>
              <span className="text-sm font-medium">{step.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
