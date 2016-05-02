"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DIFF = DIFF;
// Copyright 2015 Peter W Moresi

function DIFF(a, b) {
  var keysA = Object.keys(a),
      keysB = Object.keys(b),
      InA = keysB.filter(function (n) {
    return keysA.indexOf(n) > -1;
  }),
      NotInA = keysB.filter(function (n) {
    return keysA.indexOf(n) === -1;
  }),
      NotInB = keysA.filter(function (n) {
    return keysB.indexOf(n) === -1;
  }),
      Diff = InA.filter(function (n) {
    return a[n] !== b[n];
  });

  return {
    left: a,
    right: b,
    unique_left: NotInA,
    unique_right: NotInB,
    diff: Diff.reduce(function (x, y) {
      var diff = {};
      diff[y] = { left: a[y], right: b[y] };
      return Object.assign({}, x, diff);
    }, {})
  };
}