// Copyright 2015 Peter W Moresi

import {parsedate} from './parsedate'
import {serial} from './serial'

// DATEVALUE parses a date string and returns a serial number.
export function datevalue(d) {
  return serial(parsedate(d));
}
