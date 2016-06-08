// Copyright 2015 Peter W Moresi

import {MaxCols} from './constants';
import {index2row} from './index2row';

// INDEX2COL computes the column given a cell index
export function index2col(index) {
  return index - (index2row(index) * MaxCols);
}
