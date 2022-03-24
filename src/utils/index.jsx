export const regexForMobileNumber = /^[0-9]{10}$/;

export const regexForName = /^[a-zA-Z ]{2,30}$/;
export const regexForLastName = /^[a-zA-Z ]{1,30}$/;

/* Global Errors state utils */
export const getErrorMessage = (errors, fieldName, fieldLabel) => {
  if (errors[fieldName]) {
    const { type } = errors[fieldName];
    switch (type) {
      case "required":
        return `${fieldLabel} is required`;
      case "sameAs":
        return "Passwords did not match. Please try again.";
      case "pattern":
        return fieldLabel === "Password"
          ? `Please enter alpha-numeric with special character ${fieldLabel}`
          : `Invalid ${fieldLabel}`;
      case "maxLength":
        return `${fieldLabel} length must be 10 characters long`;
      case "minLength":
        return `${fieldLabel} length at least 10 characters long`;
      default:
        // eslint-disable-next-line no-console
        console.error(`Unknow error type: ${type}`);
        return type;
    }
  } else {
    return false;
  }
};

/* Initial Parameter of Axios Request */
// export const axiosInitialParams = {
//   cache: "no-cache",
//   credentials: "same-origin",
//   headers: {
//     "content-type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//   },
//   mode: "cors",
//   redirect: "follow",
//   referrer: "no-referrer",
//   withCredentials: true,
// };
