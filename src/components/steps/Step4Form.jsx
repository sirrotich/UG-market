import React from 'react';
import thankyouLogo from '../../assets/images/icon-thank-you.svg';
import { REDUCER_ACTIONS, useFormDispatch } from "../../state/FormContext";

export function Step4Form() {
  const dispatch = useFormDispatch();

  const handleAddAnother = () => {
    // Reset form state and go back to Step 1
    dispatch({ type: REDUCER_ACTIONS.SET_STEP, payload: 1 });
    // Optionally, you can reset the form fields here too
    dispatch({ type: REDUCER_ACTIONS.UPDATE_INPUT, field: 'name', payload: '' });
    dispatch({ type: REDUCER_ACTIONS.UPDATE_INPUT, field: 'idnumber', payload: '' });
    dispatch({ type: REDUCER_ACTIONS.UPDATE_INPUT, field: 'phone', payload: '' });
  };

  return (
    <div className="form-container column-flex-center gap-1">
      <img className="thank-you-logo" src={thankyouLogo} alt="thank you logo" />
      <h2 className="text-center">All Done</h2>
      <p className="mb-1 text-center">
        Trader has been successfully onboarded! Trader to check SMS for the details
      </p>
      <h5 className="text-center">Trader Name: Peter Langat</h5>
      <h5 className="text-center">UUID: UG-KPM-0010</h5>

      <button className="btn btn-primary" onClick={handleAddAnother}>Add Another</button>
    </div>
  );
}
