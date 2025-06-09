import React, { createContext, useContext, useState } from "react";

interface FormData {
  postcode?: string;
  wasteType?: string;
  skipSelection?: any;
  // Add other fields as needed
}

interface FormContextProps {
  currentStep: number;
  formData: FormData;
  goToStep: (step: number) => void;
  updateFormData: (data: Partial<FormData>) => void;
  validateStep: (step: number) => boolean;
  markStepCompleted: (step: number) => void;
  isStepCompleted: (step: number) => boolean;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const goToStep = (step: number) => setCurrentStep(step);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const validateStep = (step: number) => {
    /*if (step === 1) return !!formData.postcode;
    if (step === 2) return !!formData.wasteType;*/
    return true;
  };

  const markStepCompleted = (step: number) => {
    setCompletedSteps((prev) => Array.from(new Set([...prev, step])));
  };

  const isStepCompleted = (step: number) => completedSteps.includes(step);

  return (
    <FormContext.Provider
      value={{
        currentStep,
        formData,
        goToStep,
        updateFormData,
        validateStep,
        markStepCompleted,
        isStepCompleted,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext must be used within FormProvider");
  return context;
};
