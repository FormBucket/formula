// Copyright 2015 Peter W Moresi

import {flatten} from './flatten'

// XOR computes the exclusive or for a given set of `values`.
export function xor(...values) {
    return !!(flatten(values).reduce((a,b) => {
      if (b) {
        return a+1
      }
      return a
    }, 0) & 1)
}
