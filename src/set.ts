import { commandFactory } from './command-factory'
import { DEFAULTS_KEY } from './constants'
import { ESCAPE_KEY, KEYBOARD_KEY_MAP, NULL } from './keyboard'
import { KeyboardShortcut } from './types'

export const set = commandFactory(function (
  keyboardShortcuts: Array<KeyboardShortcut>
) {
  const result = []
  keyboardShortcuts.forEach(function ({
    appBundleId,
    menuPath,
    keyboardKeys: keys
  }: KeyboardShortcut) {
    result.push(
      `defaults write ${appBundleId} ${DEFAULTS_KEY} -dict-add "${stringifyMenu(
        menuPath
      )}" "${stringifyKeys(keys)}"`
    )
  })
  const length = keyboardShortcuts.length
  result.push(
    `echo "Set ${length} keyboard shortcut${length === 1 ? '' : 's'}"`
  )
  return result
})

function stringifyMenu(menu: Array<string>) {
  return menu
    .map(function (string: string) {
      return `${ESCAPE_KEY}${string}`
    })
    .join('')
}

function stringifyKeys(shortcut: Array<string>) {
  return shortcut
    .map(function (keyboardKey: string) {
      if (keyboardKey === '') {
        return NULL
      }
      const character = KEYBOARD_KEY_MAP[keyboardKey]
      return typeof character !== 'undefined' ? character : keyboardKey
    })
    .join('')
}
