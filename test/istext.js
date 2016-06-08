import test from 'tape'
import error from '../src/error'
import {istext} from '../src/istext'

test('ISTEXT', (t) => {
  t.plan(4)
  t.equal( istext( '' ), true)
  t.equal( istext( 1 ), false)
  t.equal( istext( new date() ), false)
  t.equal( istext( error.value ), false)
})
