import { RomanNumeral } from 'types';

const NUMBER_REGEX = /\d/;
const NUMBERS_REGEX = /\d/g;
const UPPER_CASE_REGEX = /[A-Z]/;
const SPECIAL_CHAR_REGEX = /\W|_/;
const ROMAN_NUMERAL_REGEX = /(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})/;
const ROMAN_NUMERALS_REGEX = /((?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3}))+/g;
const MONTHS_REGEX = /january|february|march|april|may|june|july|august|september|october|november|december/i;
const SPONSORS = /pepsi|starbucks|shell/i;
const ROMAN_NUMERAL_HASH = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};
const PERIOIDIC_TABLE_REGEX = /A[cglmrstu]|B[aehikr]?|C[adeflmnorsu]?|D[bsy]|E[rsu]|F[elmr]?|G[ade]|H[efgos]?|I[nr]?|Kr?|L[airuv]|M[cdgnot]|N[abdehiop]?|O[gs]?|P[abdmortu]?|R[abefghnu]|S[bcegimnr]?|T[abcehilms]|U|V|W|Xe|Yb?|Z[nr]/;

const getSumOfDigits = (password: string) => {
  const digits = password.matchAll(NUMBERS_REGEX);
  let sum = 0;

  for (let digit of digits) {
    sum += Number(digit);
  }

  return sum;
};

const romanNumeralToInt = (numeral: string) => {
  let sum = 0;

  for (let i = 0; i < numeral.length; i++) {
    if (numeral[i] === 'I' && numeral[i + 1] === 'V') {
      sum += 4;
      i++;
    } else if (numeral[i] === 'I' && numeral[i + 1] === 'X') {
      sum += 9;
      i++;
    } else if (numeral[i] === 'X' && numeral[i + 1] === 'L') {
      sum += 40;
      i++;
    } else if (numeral[i] === 'X' && numeral[i + 1] === 'C') {
      sum += 90;
      i++;
    } else if (numeral[i] === 'C' && numeral[i + 1] === 'D') {
      sum += 400;
      i++;
    } else if (numeral[i] === 'C' && numeral[i + 1] === 'M') {
      sum += 900;
      i++;
    } else {
      sum += ROMAN_NUMERAL_HASH[numeral[i] as RomanNumeral];
    }
  }

  return sum;
};

const getProductOfRomanNumerals = (password: string) => {
  const numerals = password.match(ROMAN_NUMERALS_REGEX);
  let product = 1;

  if (numerals) {
    for (let numeral of numerals) {
      product *= romanNumeralToInt(numeral);
    }
  }

  return product;
};

const validate = (password: string) => {
  let error: string | null = null;

  if (password.length < 5) {
    error = 'Your password must be at least 5 characters.';
  } else if (!NUMBER_REGEX.test(password)) {
    error = 'Your password must include a number.';
  } else if (!UPPER_CASE_REGEX.test(password)) {
    error = 'Your password must include an uppercase letter.';
  } else if (!SPECIAL_CHAR_REGEX.test(password)) {
    error = 'Your password must include a special character.';
  } else if (getSumOfDigits(password) !== 25) {
    error = 'The digits in your password must add up to 25.';
  } else if (!MONTHS_REGEX.test(password)) {
    error = 'Your password must include a month of the year.';
  } else if (!ROMAN_NUMERAL_REGEX.test(password)) {
    error = 'Your password must include a Roman numeral.';
  } else if (!SPONSORS.test(password)) {
    error = 'Your password must include a sponsor.';
  } else if (getProductOfRomanNumerals(password) !== 35) {
    error = 'The Roman numerals in your password should multiply to 35.';
  } else if (false) { // TODO: reCAPTCHA rule
    error = 'Your password must include this CAPTCHA.';
  } else if (false) { // TODO: Wordle rule (https://www.nytimes.com/svc/wordle/v2/2023-08-23.json)
    error = 'Your password must include today\'s Wordle answer.';
  } else if (!PERIOIDIC_TABLE_REGEX.test(password)) {
    error = 'Your password must include a two letter symbol from the periodic table.';
  }

  return error;
};

export default validate;
