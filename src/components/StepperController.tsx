import React from "react";
import { CheckCircle, Circle, AlertTriangle } from "lucide-react"; // or any icons

export default function StepperController({
  steps = [],
  currentStep,
  onStepChange,
  canNavigateToStep = () => true,
}) {
  const handleChange = (stepId) => {
    if (canNavigateToStep(stepId)) {
      onStepChange(stepId);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      {/* Mobile Dropdown */}
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

      {/* Desktop Vertical Steps */}
      <div className="hidden md:flex flex-col space-y-2">
        {steps.map((step) => {
          const isActive = step.id === currentStep;
          return (
            <button
              key={step.id}
              onClick={() => handleChange(step.id)}
              className={`flex items-center gap-3 p-3 text-left rounded-lg border transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600 shadow-md"
                  : "bg-white hover:bg-gray-100 border-gray-300"
              }`}
            >
              <span>{step.icon}</span>
              <span>{step.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
