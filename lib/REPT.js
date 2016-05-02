'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REPT = REPT;
// Copyright 2015 Peter W Moresi

// REPT creates string by repeating text a given number of times.
function REPT(text, number) {
  var r = '';
  for (var i = 0; i < number; i++) {
    r += text;
  }
  return r;
}