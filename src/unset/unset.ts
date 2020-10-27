const commandFactory = require('../command-factory')
const DEFAULTS_KEY = require('../constants')

const unset = commandFactory(function (config) {
  const result = []
  for (const domain in config) {
    result.push(`defaults delete ${domain} ${DEFAULTS_KEY}`)
  }
  result.push('echo "Unset keyboard shortcuts"')
  return result
})

module.exports = unset
