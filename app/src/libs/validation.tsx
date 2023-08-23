import {
  // calculateTime,
  NUMBER_REGEX,
  NUMBER_GLOBAL_REGEX,
  UPPER_CASE_LETTERS_REGEX,
  LETTERS_GLOBAL_REGEX,
  SPECIAL_CHAR_REGEX,
  ROMAN_NUMERAL_REGEX,
  ROMAN_NUMERAL_GLOBAL_REGEX,
  MONTHS_REGEX,
  SPONSORS_REGEX,
  PERIODIC_TABLE_REGEX,
  PERIODIC_TABLE_GLOBAL_REGEX,
  LEAP_YEAR_REGEX,
  CHICKEN_EGG_REGEX,
  WEIGHTLIFTER_REGEX,
  AFFIRMATIONS_REGEX,
  // YOUTUBE_VIDEO_LENGTH_IN_SECONDS,
  PRIMES_UNDER_500
} from 'utils';
import { CHICKEN_EGG, PERIODIC_TABLE, ROMAN_NUMERALS, WEIGHTLIFTER } from 'data';
import { ChemicalElement, RomanNumeral } from 'types';

const getSumOfDigits = (password: string) => {
  const digits = password.matchAll(NUMBER_GLOBAL_REGEX);
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
      sum += ROMAN_NUMERALS[numeral[i] as RomanNumeral];
    }
  }

  return sum;
};

const getProductOfRomanNumerals = (password: string) => {
  const numerals = password.match(ROMAN_NUMERAL_GLOBAL_REGEX);
  let product = 1;

  if (numerals) {
    for (let numeral of numerals) {
      product *= romanNumeralToInt(numeral);
    }
  }

  return product;
};

const containsLeapYear = (password: string) => {
  const years = password.matchAll(LEAP_YEAR_REGEX);

  for (let year of years) {
    const _year = Number(year);

    if (_year % 400 == 0 || (_year % 100 > 0 && _year % 4 == 0)) {
      return true;
    }
  }

  return false;
};

const sumOfElements = (password: string) => {
  const elements = password.match(PERIODIC_TABLE_GLOBAL_REGEX);
  let sum = 0;

  if (elements) {
    for (let element of elements) {
      sum += PERIODIC_TABLE[String(element) as ChemicalElement];
    }
  }
  console.log(sum)
  return sum;
};

const numberOfWeightliftingEmojis = (password: string) => {
  const emojis = password.match(WEIGHTLIFTER_REGEX);
  return emojis?.length || 0;
}

const getNumberOfUsedLetters = (password: string) => {
  const letters = password.match(LETTERS_GLOBAL_REGEX);
  let sum = 0;

  if (letters) {
    sum = new Set(letters.map(letter => letter.toLocaleLowerCase())).size;
  }

  return sum;
};

const includesCurrentTime = (password: string) => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const now = `${hours}:${minutes}`;
  return password.includes(now);
};

const validate = (password: string) => {
  let error: string | null = null;

  if (password.length === 0) {
    return error;  // Empty passwords don't require validation.
  } else if (password.length < 5) {
    error = 'Your password must be at least 5 characters.';
  } else if (!NUMBER_REGEX.test(password)) {
    error = 'Your password must include a number.';
  } else if (!UPPER_CASE_LETTERS_REGEX.test(password)) {
    error = 'Your password must include an uppercase letter.';
  } else if (!SPECIAL_CHAR_REGEX.test(password)) {
    error = 'Your password must include a special character.';
  } else if (getSumOfDigits(password) !== 25) {
    error = 'The digits in your password must add up to 25.';
  } else if (!MONTHS_REGEX.test(password)) {
    error = 'Your password must include a month of the year.';
  } else if (!ROMAN_NUMERAL_REGEX.test(password)) {
    error = 'Your password must include a Roman numeral.';
  } else if (!SPONSORS_REGEX.test(password)) {
    error = 'Your password must include a sponsor: Pepsi, Starbucks, or Shell.';
  } else if (getProductOfRomanNumerals(password) !== 35) {
    error = 'The Roman numerals in your password should multiply to 35.';
  // } else if (false) { // TODO: reCAPTCHA rule
  //   error = 'Your password must include this CAPTCHA.';
  // } else if (false) { // TODO: Wordle rule (https://www.nytimes.com/svc/wordle/v2/2023-08-23.json)
  //   error = 'Your password must include today\'s Wordle answer.';
  } else if (!PERIODIC_TABLE_REGEX.test(password)) {
    error = 'Your password must include a two letter symbol from the periodic table.';
  // } else if (false) { // Moon phases as emoji
  //   error = 'Your password must include the current phase of the moon as an emoji.';
  // } else if (false) { // Google maps country
  //   error = 'Your password must include the name of this country.';
  } else if (!containsLeapYear(password)) {
    error = 'Your password must include a leap year.';
  // } else if (false) { // Chess
  //   error = 'Your password must include the best move in algebraic chess notation.';
  } else if (!CHICKEN_EGG_REGEX.test(password)) {
    error = CHICKEN_EGG + ' This is my chicken Paul. He hasn\'t hatched yet, please put him in your password and keep him safe.';
  } else if (sumOfElements(password) !== 200) {
    error = 'The elements in your password must have atomic numbers that add up to 200.';
  } else if (numberOfWeightliftingEmojis(password) < 3) {
    error = `Your password is not strong enough ${WEIGHTLIFTER}.`;
  } else if (!AFFIRMATIONS_REGEX.test(password)) {
    error = 'Your password must contain one of the following affirmations: I am loved / I am worthy / I am enough.';
  // } else if (false) { // YouTube video length
  //   const [minutes, seconds] = calculateTime(YOUTUBE_VIDEO_LENGTH_IN_SECONDS);
  //   error = `Your password must include the URL of a YouTube video that is ${minutes} minutes, ${seconds} seconds long.`;
  } else if (getNumberOfUsedLetters(password) >= 25) {
    error = 'A sacrifice must be made. Pick 2 letters that you will no longer be able to use.';
  } else if (!password.includes(String(password.length))) {
    error = 'Your password must include the length of your password.';
  } else if (!PRIMES_UNDER_500.has(password.length)) {
    error = 'The length of your password must be a prime number.';
  } else if (!includesCurrentTime(password)) {
    error = 'Your password must include the current time in 24-hour format.';
  }

  return error;
};

export default validate;
