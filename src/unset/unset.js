import { commandFactory } from '../command-factory'
import { DEFAULTS_KEY } from '../constants'

export const unset = commandFactory(function (config) {
  const result = []
  for (const domain in config) {
    result.push(`defaults delete ${domain} ${DEFAULTS_KEY}`)
  }
  result.push('echo "Unset keyboard shortcuts"')
  return result
})
