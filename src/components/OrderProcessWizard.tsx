import React, { useState } from "react";
import StepperController from "./StepperController";
import { UserCircle, FileText, CreditCard, CheckCircle } from "lucide-react";
import SkipList from "./SkipList";

const steps = [
  { id: 1, title: "Account Info", icon: <UserCircle className="w-5 h-5" /> },
  { id: 2, title: "Details", icon: <FileText className="w-5 h-5" /> },
  { id: 3, title: "Payment", icon: <CreditCard className="w-5 h-5" /> },
  { id: 4, title: "Confirmation", icon: <CheckCircle className="w-5 h-5" /> },
];

export default function FormWizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const validateStep = (nextStep) => {
    if (nextStep > currentStep) {
      return validateCurrentStep();
    }
    return true;
  };

  const validateCurrentStep = () => {
    // Example placeholder logic for validation
    return true;
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <div>Step 1: Account Info Form</div>;
      case 2:
        return <div>Step 2: Details Form</div>;
      case 3:
        return <SkipList />;
      case 4:
        return <div>Step 4: Confirmation</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Left: Stepper */}
        <div className="md:col-span-1">
          <StepperController
            steps={steps}
            currentStep={currentStep}
            onStepChange={setCurrentStep}
            canNavigateToStep={validateStep}
          />
        </div>

        {/* Right: Step Content */}
        <div className="md:col-span-3">
          <div className="p-4 rounded-xl bg-white shadow-md">
            {renderStepContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
