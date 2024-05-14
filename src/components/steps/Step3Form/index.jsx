import React from 'react';

import { useForm } from '../../../state/FormContext';
export function Step3Form() {
  const formState = useForm();

  return (
    <div className="form-container">
      <h2>Finishing up</h2>
      <p className="mb-1">Double-check everything looks OK before confirming</p>
      <div className="summary">
        <p><strong>Field Officer:</strong> {formState.officername}</p>
        <p><strong>Selected Option:</strong> {formState.dropdown}</p>
        <p><strong>Nature of Business:</strong> {formState.business}</p>
        <p><strong>Full Name:</strong> {formState.name}</p>
        <p><strong>ID Number:</strong> {formState.idnumber}</p>
        <p><strong>Phone Number:</strong> {formState.phone}</p>
      </div>
    </div>
  );
}
