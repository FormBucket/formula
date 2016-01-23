import {FLATTEN} from './FLATTEN';

export function MAX() {
  FLATTEN( arguments ).reduce((max, next) => {
    if (typeof next !== 'number' || next !== next) {
      return max;
    }

    return Math.max(max, next);
  }, undefined );
}
