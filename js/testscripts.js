/*
Test: "It converts roman numeral symbols into number values"
Expect: (X).toEqual(10);

Test: "It sums the values of symbols in a string"
Expect:(XI).toEqual(11);

Test: "It subtracts the value of symbols that precede a symbol of a higher value from the higher value"
Expect: (XC).toEqual(90)

Test: "It calculates the value of each number place sequentially (thousands, then hundreds, then tens, then ones) before proceeding to the next"
Expect: (CDXCIX).toEqual(499)
*/

const I = 1
const V = 5
const X = 10
const L = 50
const C = 100
const D = 500
const M = 1000


function romanNumeralIfItsOnlyTwoDigitsLong(symbol1, symbol2) {
  if (symbol1 < symbol2) {
    return(symbol2 - symbol1);
  } else {
    return(symbol1 + symbol2);
  }
}

