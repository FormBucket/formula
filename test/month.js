import test from 'tape'
import {month} from '../src/month'
import error from '../src/error'

test('month', (t) => {
  t.plan(3)
  t.equal( month('1/1/2000'), 1)
  t.equal( month('5/15/2000'), 5)
  t.equal( month('12/31/2000'), 12)
});
