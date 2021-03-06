import test from "tape";
import code from "../src/code";
import { ERRORTYPES as error } from "../src/error";

test("code", t => {
  t.plan(5);
  t.equal(code("Aa"), 65);
  t.equal(code("Aa", 1), 65);
  t.equal(code("Aa", 2), 97);
  t.equal(code("Aa", -1), error.na);
  t.equal(code("Aa", 3), error.value);
});
