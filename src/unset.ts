import { commandFactory } from './command-factory'
import { DEFAULTS_KEY } from './constants'
import { KeyboardShortcut } from './types'

export const unset = commandFactory(function (
  keyboardShortcuts: Array<KeyboardShortcut>
) {
  const result: Array<string> = []
  for (const { appBundleId } of keyboardShortcuts) {
    result.push(`defaults delete ${appBundleId} ${DEFAULTS_KEY}`)
  }
  result.push('echo "Unset keyboard shortcuts"')
  return result
})
