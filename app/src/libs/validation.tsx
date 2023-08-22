const numberRegex = /\d/;
const upperCaseRegex = /[A-Z]/;
const specialCharRegex = /\W|_/;

const validate = (password: string) => {
  let error: string | null = null;

  if (password.length < 5) {
    error = 'Your password must be at least 5 characters.';
  } else if (!numberRegex.test(password)) {
    error = 'Your password must include a number.';
  } else if (!upperCaseRegex.test(password)) {
    error = 'Your password must include an uppercase letter.';
  } else if (!specialCharRegex.test(password)) {
    error = 'Your password must include a special character.';
  }

  return error;
};

export default validate;
