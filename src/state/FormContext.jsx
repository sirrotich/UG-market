import React, { createContext, useContext, useReducer } from "react";

// Create context for form state
const FormContext = createContext(null);
const FormDispatchContext = createContext(null);

// Custom hook to access form state
export function useForm() {
  return useContext(FormContext);
}

// Custom hook to access form dispatch
export function useFormDispatch() {
  return useContext(FormDispatchContext);
}

// Enum for reducer actions
export const REDUCER_ACTIONS = {
  UPDATE_INPUT: "UPDATE_INPUT",
  SET_STEP: "SET_STEP",
  SET_ERROR: "SET_ERROR",
  RESET_FORM: "RESET_FORM",
};

// Initial form state
const initialFormState = {
  currentStep: 1,
  officername: "",
  name: "",
  email: "",
  phone: "",
  dropdown: "",
  business: "",
  idnumber: "",
  errors: {
    officername: "",
    name: "",
    email: "",
    phone: "",
    dropdown: "",
    business: "",
    idnumber: "",
  },
};

// Form reducer
const formReducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTIONS.UPDATE_INPUT:
      return {
        ...state,
        [action.field]: action.payload,
      };
    case REDUCER_ACTIONS.SET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          ...action.payload,
        },
      };
    case REDUCER_ACTIONS.SET_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case REDUCER_ACTIONS.RESET_FORM:
      return initialFormState;
    default:
      return state;
  }
};

// Form provider to manage form state and dispatch
export function FormProvider({ children }) {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);

  return (
    <FormContext.Provider value={formState}>
      <FormDispatchContext.Provider value={dispatch}>
        {children}
      </FormDispatchContext.Provider>
    </FormContext.Provider>
  );
}
