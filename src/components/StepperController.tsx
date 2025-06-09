import React from "react";

export interface Step {
  title: string;
  icon: React.ReactNode;
}

interface StepperControllerProps {
  steps: Step[];
  currentStep: number;
  onStepChange: (index: number) => void;
  canNavigateToStep: () => boolean;
  children: React.ReactNode;
}

export default function StepperController({
  steps = [],
  currentStep,
  onStepChange,
  canNavigateToStep = () => true,
}: StepperControllerProps) {
  const handleChange = (stepId) => {
    if (canNavigateToStep(stepId)) {
      onStepChange(stepId);
    }
  };

  return (
    <div className="w-full">
      {/* Mobile dropdown */}
      <div className="block md:hidden mb-4">
        <select
          className="w-full border rounded-lg p-2"
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
          return (
            <button
              key={step.id}
              onClick={() => handleChange(step.id)}
              className={`flex items-center gap-3 p-3 text-left rounded-lg border ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600 shadow"
                  : "bg-white hover:bg-gray-100 border-gray-300"
              }`}
            >
              {step.icon}
              <span>{step.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
