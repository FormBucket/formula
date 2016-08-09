// Copyright 2015 Peter W Moresi

import {isfunction} from './isfunction'

// branch( test, result_if_true, [test2, result_if_true,] false_result )
export function branch(...cases) {

  var resolved = false

  // Reduce all cases into a value.
  return cases.reduce( function(acc, item, index) {
    let val;

    // Return previously resolved result
    if (resolved === true) return acc

    // Handle last item
    if ( index === cases.length - 1 ) {
      // There is no last item.
      if (index % 2 === 1) return;

      // return the last item
      return isfunction(item) ? item() : item;
    }

    // Check if condition is true
    if (index % 2 === 0 && (
        (isfunction(item) && item() === true) ||
        (item === true))) {
      resolved = true
      val = cases[index+1]
      return isfunction(val) ? val() : val;
    }

    return acc;

  }, undefined)

}
