// Copyright 2015 Peter W Moresi

import {isnumber} from './isnumber';
import error from './error'

// MULTIPLY calculates the product of two numbers.
export function multiply(...values) {

  // Return `#NA!` if 2 arguments are not provided.
  if (values.length !== 2) {
    return error.na;
  }

  // decompose values into a and b.
  var [a, b] = values

  // Return `#VALUE!` if either a or b is not a number.
  if (!isnumber(a) || !isnumber(b)) {
    return error.value
  }

  // Return the product
  return a * b
}
