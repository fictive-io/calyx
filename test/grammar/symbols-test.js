import test from 'ava'
import calyx from '../../dist/calyx.cjs'

test.skip('substitutes a chain of rules with symbols', t => {
  const grammar = calyx.grammar({
    start: '{rule_symbol}',
    rule_symbol: '{terminal_symbol}',
    terminal_symbol: 'OK'
  })

  t.is(grammar.generate(), 'OK')
});
