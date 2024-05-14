import React from 'react';
import { REDUCER_ACTIONS, useForm, useFormDispatch } from "../../state/FormContext";
import { SubmitButton } from "../form/SubmitButton";
import { onValidate } from "./validateForm";

export const Footer = () => {
  const formState = useForm();
  const dispatch = useFormDispatch();
  const currentStep = formState.currentStep;

  const updateError = (errors) => {
    dispatch({
      type: REDUCER_ACTIONS.SET_ERROR,
      payload: errors,
    });
  };

  const setStep = (step) => {
    dispatch({
      type: REDUCER_ACTIONS.SET_STEP,
      payload: step,
    });
  };

  const clearForm = () => {
    Object.keys(formState).forEach((field) => {
      if (field !== "currentStep" && field !== "errors") {
        dispatch({
          type: REDUCER_ACTIONS.UPDATE_INPUT,
          field: field,
          payload: '',
        });
      }
    });
  };

  const onNextStep = () => {
    const { errors, hasError } = onValidate(currentStep, formState);
    updateError(errors);
    if (!hasError) {
      if (currentStep === 3) {
        setStep(4);
        clearForm();
      } else {
        setStep(currentStep + 1);
      }
    }
  };

  const onBackStep = () => {
    setStep(Math.max(currentStep - 1, 1));
  };

  const onAddAnother = () => {
    setStep(1);
    clearForm();
  };

  if (currentStep < 3) {
    return (
      <footer className="absolute pr-2">
        <SubmitButton
          stepNo={currentStep}
          onNextStep={onNextStep}
          onBackStep={currentStep === 1 ? null : onBackStep}
        />
      </footer>
    );
  } else if (currentStep === 3) {
    return (
      <footer className="absolute pr-2">
        <SubmitButton
          stepNo={currentStep}
          onNextStep={onNextStep}
          buttonText="Confirm"
        />
      </footer>
    );
  } else if (currentStep === 4) {
    return (
      <footer className="absolute pr-2">

      </footer>
    );
  }

  return null;
};
