const validate = (input) => {
  if (!input.length) {
    return "No input has been entered.";
  }
  if (input.length !== 14) {
    return "Input entered needs to be 14 characters.";
  }

  let countryCode = input.slice(0, 2);
  if (!isNaN(countryCode)) {
    return "The first 2 characters in the EORI are ment to be letters, but they are numbers here.";
  }
  if (countryCode !== "GB") {
    if (countryCode !== "XI") {
      return "The first 2 letters of the EORI code needs to be either 'GB or 'XI' ";
    }
  }
  let numbers = input.slice(2);
  if (isNaN(numbers)) {
    return "Characters from 3rd place are all ment to be numbers";
  }

  return "VALID";
};

export default validate;
