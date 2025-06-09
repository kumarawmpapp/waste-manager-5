import React, { useState } from "react";
import StepperController from "./StepperController";
import { UserCircle, FileText, CreditCard, CheckCircle } from "lucide-react";
import SkipList from "./SkipList";

const steps = [
  { id: 1, title: "Account Info", icon: <UserCircle /> },
  { id: 2, title: "Details", icon: <FileText /> },
  { id: 3, title: "Payment", icon: <CreditCard /> },
  { id: 4, title: "Confirmation", icon: <CheckCircle /> },
];

export default function OrderProcessWizard() {
  const [currentStep, setCurrentStep] = useState(1);

  const validateStep = (nextStep) => {
    // Perform validation logic here before moving
    if (nextStep > currentStep) {
      // prevent skipping ahead without validation
      return validateCurrentStep();
    }
    return true;
  };

  const validateCurrentStep = () => {
    // Example logic
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
    <div className="p-4">
      <StepperController
        steps={steps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
        canNavigateToStep={validateStep}
      />

      <div className="mt-6 p-4 border rounded-lg bg-gray-50">
        {renderStepContent()}
      </div>
    </div>
  );
}
