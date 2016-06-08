import test from 'tape'
import {char} from '../src/char'

test('CHAR', (t) => {
  t.plan(2)
  t.equal( char( 65 ), 'A')
  t.equal( char( 97 ), 'a')
})
