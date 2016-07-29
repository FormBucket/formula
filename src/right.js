// Copyright 2015 Peter W Moresi

import {isblank} from './isblank'
import {n} from './n'
import error from './error'

// RIGHT pulls a given number of character from the right side of `text`.
export function right(text, number) {

  if (isblank(text)) {
    return ''
  }

  if (!n(+number)) {
    return text
  }

  return text.substring( text.length - number )

}
