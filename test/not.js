import test from "tape";
import { ERRORTYPES as error } from "../src/error";
import not from "../src/not";

test("not", t => {
  t.plan(5);
  t.equal(not(true), false);
  t.equal(not(false), true);
  t.equal(not(1), false);
  t.equal(not(0), true);
  t.equal(not("foo"), error.value);
});
