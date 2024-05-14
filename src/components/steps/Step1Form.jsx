import React from 'react';
import Select from 'react-select';
import { REDUCER_ACTIONS, useForm, useFormDispatch } from "../../state/FormContext";
import { Input } from "../form/Input";

export function Step1Form() {
  const formState = useForm();
  const dispatch = useFormDispatch();

  const handleTextChange = (e) => {
    dispatch({
      type: REDUCER_ACTIONS.UPDATE_INPUT,
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSelectChange = (selectedOption, field) => {
    dispatch({
      type: REDUCER_ACTIONS.UPDATE_INPUT,
      field: field,
      payload: selectedOption ? selectedOption.value : "",
    });
  };

  const dropdownOptions = [
    { value: 'Lanagas Market', label: 'Lanagas Market' },
    { value: 'Kahoya Market', label: 'Kahoya Market' },
    { value: 'Kipkaren Market', label: 'Kipkaren Market' },
    { value: 'west Market', label: 'west Market' },
  ];

  const businessesDropdownOptions = [
    { value: 'Clothing', label: 'Clothing' },
    { value: 'Food', label: 'Food' },
    { value: 'Jua Kali', label: 'Jua Kali' },
  ];

  return (
    <div className="form-container">
      <Input
        label="Field Officer"
        type="text"
        name="officername"
        placeholder=""
        onChange={handleTextChange}
        value={formState.officername || ""}
        error={formState.errors.officername}
        style={{ backgroundColor: '#e0e0e0' }}

      />

      <label htmlFor="dropdown">Select Market:</label>
      <Select
        id="dropdown"
        name="dropdown"
        options={dropdownOptions}
        value={dropdownOptions.find(option => option.value === formState.dropdown) || null}
        onChange={(selectedOption) => handleSelectChange(selectedOption, 'dropdown')}
        placeholder="Select market option"
        isClearable
      />
      <span className="error">{formState.errors.dropdown}</span>

      <label htmlFor="businessDropdown">Nature of Business:</label>
      <Select
        id="businessDropdown"
        name="business"
        options={businessesDropdownOptions}
        value={businessesDropdownOptions.find(option => option.value === formState.business) || null}
        onChange={(selectedOption) => handleSelectChange(selectedOption, 'business')}
        placeholder="Select the nature of business"
        isClearable
      />
      <span className="error">{formState.errors.business}</span>
    </div>
  );
}
