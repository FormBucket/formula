// Copyright 2015 Peter W Moresi

import {parsedate} from './parsedate';
import error from './error'

// DIVIDE calculates the product of two numbers.
export function eomonth(start_date, months) {
  start_date = parsedate(start_date);

  if (start_date instanceof Error) {
    return start_date;
  }
  if (isNaN(months)) {
    return error.value;
  }
  months = parseInt(months, 10);
  return new Date(start_date.getFullYear(), start_date.getMonth() + months + 1, 0);
}
