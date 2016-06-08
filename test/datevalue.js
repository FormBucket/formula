import {datevalue} from '../src/datevalue'
import test from 'tape'
import error from '../src/error'

test('DATEVALUE', function(t) {
  t.plan(3)
  t.equal( datevalue("1/1/2008"), 39448 );
  t.equal( datevalue(39448), 39448 );
  t.equal( datevalue("foo"), error.na );
});
