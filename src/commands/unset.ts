import { KeyboardShortcut } from '../types'
import { commandFactory } from './command-factory/command-factory'
import { DEFAULTS_KEY } from './constants'

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
