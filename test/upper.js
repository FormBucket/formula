import test from 'tape'
import error from '../src/error'
import {upper} from '../src/upper'

test('UPPER', (t) => {
  t.plan(1)
  t.equal( upper( 'foo' ), 'FOO')
})
