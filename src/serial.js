// Copyright 2015 Peter W Moresi

import {d1900, MilliSecondsInDay} from './constants'
import {isdate} from './isdate'
import error from './error';

// SERIAL convert a date object into a serial number.
export function serial(date) {
  // Credit: https://github.com/sutoiku/formula.js/
  if (!isdate(date)) { return error.na }
  var diff = Math.ceil((date - d1900) / MilliSecondsInDay)
  return diff + ( diff > 59 ? 2 : 1)
}
