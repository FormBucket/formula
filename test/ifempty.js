import test from 'tape';
import {ifempty} from '../src/ifempty';

test('IFEMPTY', function(t) {
  t.plan(5)
  t.is(ifempty(undefined, 'Yes'), 'Yes')
  t.is(ifempty(null, 'Yes'), 'Yes')
  t.is(ifempty('', 'Yes'), 'Yes')
  t.is(ifempty('True', 'Yes'), 'True')
  t.is(ifempty(false, 'Yes'), false)
})
