import React from 'react';
import { REDUCER_ACTIONS, useForm, useFormDispatch } from "../../state/FormContext";
import { Input } from "../form/Input";

export function Step2Form() {
  const formState = useForm();
  const dispatch = useFormDispatch();

  const handleTextChange = (e) => {
    dispatch({
      type: REDUCER_ACTIONS.UPDATE_INPUT,
      field: e.target.name,
      payload: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h2>Trader Details</h2>
      <p className="mb-1">
        Please provide full name, ID number, and phone number
      </p>

      <Input
        label="Full Name"
        type="text"
        name="name"
        placeholder="e.g. Felix Korir"
        onChange={handleTextChange}
        value={formState.name || ""}
        error={formState.errors.name}
      />
      <Input
        label="ID Number"
        type="text"
        name="idnumber"
        placeholder="e.g. 12345678"
        onChange={handleTextChange}
        value={formState.idnumber || ""}
        error={formState.errors.idnumber}
      />
      <Input
        label="Phone Number"
        type="tel"
        name="phone"
        placeholder="e.g. +1234567890"
        onChange={handleTextChange}
        value={formState.phone || ""}
        error={formState.errors.phone}
      />
    </div>
  );
}
