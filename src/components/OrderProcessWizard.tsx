import React from "react";
import StepperController from "./StepperController";
import SkipSelectionView from "./SkipSelectionView";
import { useFormContext } from "../context/FormContext";
import DefaultForm from "./DefaultForm";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  MapPin,
  Shield,
  Trash2,
  Truck,
} from "lucide-react";

const steps = [
  { id: 1, title: "Post Code", icon: <MapPin size={18} /> },
  { id: 2, title: "Waste Type", icon: <Trash2 size={18} /> },
  { id: 3, title: "Select Skip", icon: <Truck size={18} /> },
  { id: 4, title: "Permit Check", icon: <Shield size={18} /> },
  { id: 5, title: "Choose Date", icon: <Calendar size={18} /> },
  { id: 6, title: "Payment", icon: <CreditCard size={18} /> },
];

export default function OrderProcessWizard() {
  const {
    currentStep,
    goToStep,
    validateStep,
    markStepCompleted,
    isStepCompleted,
  } = useFormContext();

  const handleNext = () => {
    if (validateStep(currentStep)) {
      markStepCompleted(currentStep);
      goToStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) goToStep(currentStep - 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <DefaultForm label="Post Code">
            <h1>
              Postcode details here... Please click/tap on next to proceed.
            </h1>
          </DefaultForm>
        );
      case 2:
        return (
          <DefaultForm label="Waste Type">
            <h1>
              Waste type details here... Please click/tap on next to proceed.
            </h1>
          </DefaultForm>
        );
      case 3:
        return <SkipSelectionView />;
      default:
        return <div>Coming Soon...</div>;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4">
      <div className="md:col-span-1">
        <StepperController
          steps={steps}
          currentStep={currentStep}
          onStepChange={goToStep}
          canNavigateToStep={(id) => id === currentStep || isStepCompleted(id)}
        />
      </div>
      <div className="md:col-span-3 p-6 shadow-md flex flex-col justify-between max-h-[calc(100vh-100px)] overflow-y-auto">
        <div className="flex-1 overflow-y-auto">{renderStepContent()}</div>
        <div className="mt-4 flex justify-between">
          <button
            onClick={handleBack}
            className="p-2 rounded-full bg-gray-700 hover:bg-gray-600"
          >
            <ChevronLeft size={20} />
          </button>
          <div>
            <h1>Customer Care : 0800 808 5475</h1>
          </div>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-blue-600 hover:bg-blue-700"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
