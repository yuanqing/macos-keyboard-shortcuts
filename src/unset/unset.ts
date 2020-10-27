// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'commandFac... Remove this comment to see the full error message
const commandFactory = require('../command-factory')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'DEFAULTS_K... Remove this comment to see the full error message
const DEFAULTS_KEY = require('../constants')

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'unset'.
const unset = commandFactory(function (config: any) {
  const result = []
  for (const domain in config) {
    result.push(`defaults delete ${domain} ${DEFAULTS_KEY}`)
  }
  result.push('echo "Unset keyboard shortcuts"')
  return result
})

module.exports = unset
