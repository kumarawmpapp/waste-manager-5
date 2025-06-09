import React, { useState } from "react";
import StepperController from "./StepperController";
import {
  FileText,
  CreditCard,
  CheckCircle,
  Map,
  MapPin,
  Trash2,
  Truck,
  Shield,
  Calendar,
  LucideCreditCard,
} from "lucide-react";
import SkipList from "./SkipList";

const steps = [
  { id: 1, title: "Post Code", icon: <MapPin className="w-5 h-5" /> },
  { id: 2, title: "Waste Type", icon: <Trash2 className="w-5 h-5" /> },
  { id: 3, title: "Select Skip", icon: <Truck className="w-5 h-5" /> },
  { id: 4, title: "Permit Check", icon: <Shield className="w-5 h-5" /> },
  { id: 5, title: "Choose Date", icon: <Calendar className="w-5 h-5" /> },
  { id: 6, title: "Payment", icon: <LucideCreditCard className="w-5 h-5" /> },
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
