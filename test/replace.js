import {replace} from '../src/replace';
import test from 'tape';

test('REPLACE', function(t) {
  t.plan(2)
  t.equal( replace("apples", 2, 5, "te"), "ate"  );
  t.equal( replace("apples", 2, 2, "te"), "ateles"  );
});
