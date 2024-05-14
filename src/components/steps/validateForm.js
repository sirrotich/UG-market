const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const phoneRegExp = /^[0-9]+$/;
const defaultError = "This field is required";

const onValidateStep1 = (formState) => {
  const { officername, dropdown, business } = formState;
  const errors = {
    officername: "",
    dropdown: "",
    business: "",
  };

  if (officername.length === 0) {
    errors.officername = defaultError;
  }

  if (!dropdown) {
    errors.dropdown = defaultError;
  }

  if (!business) {
    errors.business = defaultError;
  }

  const hasError = !!errors.officername || !!errors.dropdown || !!errors.business;
  return { errors, hasError };
};

const onValidateStep2 = (formState) => {
  const { name, idnumber, phone } = formState;
  const errors = {
    name: "",
    idnumber: "",
    phone: "",
  };

  if (name.length === 0) {
    errors.name = defaultError;
  }

  if (idnumber.length === 0) {
    errors.idnumber = defaultError;
  } else if (!phoneRegExp.test(idnumber)) {
    errors.idnumber = "ID number must be numeric";
  }

  if (phone.length === 0) {
    errors.phone = defaultError;
  } else if (!phoneRegExp.test(phone)) {
    errors.phone = "Phone number must be numeric";
  }

  const hasError = !!errors.name || !!errors.idnumber || !!errors.phone;
  return { errors, hasError };
};

const onValidateStep3 = (formState) => {
  // Add any specific validations for step 3 if needed.
  return { errors: {}, hasError: false };
};

export const onValidate = (stepNo, formState) => {
  switch (stepNo) {
    case 1:
      return onValidateStep1(formState);
    case 2:
      return onValidateStep2(formState);
    case 3:
      return onValidateStep3(formState);
    default:
      return { errors: {}, hasError: false };
  }
};
