import {cellindex} from '../src/cellindex';
import error from '../src/error';
import test from 'tape';

test('CELLINDEX', function(t) {
  t.plan(3)
  t.equal( cellindex(0, 0), 0, 'Should be 0');
  t.equal( cellindex(0, 1), 1, 'Should be 1');
  t.equal( cellindex(1, 1), 16385, 'Should be 16385');
});
