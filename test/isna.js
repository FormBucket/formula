import test from 'tape'
import error from '../src/error'
import {isna} from '../src/isna'

test('ISNA', (t) => {
  t.plan(4)
  t.equal( isna( error.na ), true)
  t.equal( isna( error.value ), false)
  t.equal( isna( 'error.na' ), false)
  t.equal( isna( new date() ), false)
})
