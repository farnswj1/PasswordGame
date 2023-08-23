import { CHICKEN_EGG, WEIGHTLIFTER } from 'data';

export const NUMBER_REGEX = /\d/;
export const NUMBER_GLOBAL_REGEX = /\d/g;
export const UPPER_CASE_LETTERS_REGEX = /[A-Z]/;
export const LETTERS_GLOBAL_REGEX = /[a-z]/gi;
export const SPECIAL_CHAR_REGEX = /\W|_/;
export const ROMAN_NUMERAL_REGEX = /(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})/;
export const ROMAN_NUMERAL_GLOBAL_REGEX = /((?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3}))+/g;
export const MONTHS_REGEX = /january|february|march|april|may|june|july|august|september|october|november|december/i;
export const SPONSORS_REGEX = /pepsi|starbucks|shell/i;
export const PERIODIC_TABLE_REGEX = /A[cglmrstu]|B[aehikr]?|C[adeflmnorsu]?|D[bsy]|E[rsu]|F[elmr]?|G[ade]|H[efgos]?|I[nr]?|Kr?|L[airuv]|M[cdgnot]|N[abdehiop]?|O[gs]?|P[abdmortu]?|R[abefghnu]|S[bcegimnr]?|T[abcehilms]|U(ue)?|V|W|Xe|Yb?|Z[nr]/;
export const PERIODIC_TABLE_GLOBAL_REGEX = /A[cglmrstu]|B[aehikr]?|C[adeflmnorsu]?|D[bsy]|E[rsu]|F[elmr]?|G[ade]|H[efgos]?|I[nr]?|Kr?|L[airuv]|M[cdgnot]|N[abdehiop]?|O[gs]?|P[abdmortu]?|R[abefghnu]|S[bcegimnr]?|T[abcehilms]|U(ue)?|V|W|Xe|Yb?|Z[nr]/g;
export const LEAP_YEAR_REGEX = /\d+/g;
export const CHICKEN_EGG_REGEX = new RegExp(CHICKEN_EGG);
export const WEIGHTLIFTER_REGEX = new RegExp(WEIGHTLIFTER, 'g');
export const AFFIRMATIONS_REGEX = /I am (loved|worthy|enough)/;
export const YOUTUBE_VIDEO_LENGTH_IN_SECONDS = 120 + Math.floor(Math.random() * 480);
