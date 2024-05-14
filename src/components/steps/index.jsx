import { useForm } from "../../state/FormContext";
import { Footer } from "./Footer";
import { Step1Form } from "./Step1Form";
import { Step2Form } from "./Step2Form";
import { Step3Form } from "./Step3Form"; // Import Step3Form
import { Step4Form } from "./Step4Form"; // If you have Step4Form

/**
 * Given a step, will render the proper StepForm
 * @param {} step : number
 * @returns StepForm function that returns a JSX.Element component
 */
function getStepform(step = 1) {
  switch (step) {
    case 1:
      return Step1Form;
    case 2:
      return Step2Form;
    case 3:
      return Step3Form; // Add Step3Form to the switch-case
    case 4:
      return Step4Form; // Assuming Step4Form is defined for further steps
    default:
      return Step1Form;
  }
}

export const StepForm = () => {
  const formState = useForm();
  const step = formState.currentStep;
  const StepForm = getStepform(step);

  return (
    <>
      <StepForm />
      <Footer />
    </>
  );
};
