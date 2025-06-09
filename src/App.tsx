import { FormProvider } from "./context/FormContext";
import OrderProcessWizard from "./components/OrderProcessWizard";

export default function App() {
  return (
    <FormProvider>
      <div className="h-screen bg-gray-900 text-white flex flex-col overflow-hidden">
        <OrderProcessWizard />
      </div>
    </FormProvider>
  );
}

