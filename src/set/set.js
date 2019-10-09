import { commandFactory } from '../command-factory'
import { DEFAULTS_KEY } from '../constants'
import { KEYBOARD_KEY_MAP, ESCAPE_KEY } from './keyboard'
import { parseConfig } from './parse-config'

export const set = commandFactory(function (config) {
  const keyboardShortcuts = parseConfig(config)
  const result = []
  keyboardShortcuts.forEach(function ({ domain, menu, shortcut }) {
    result.push(
      `defaults write ${domain} ${DEFAULTS_KEY} -dict-add "${createMenu(
        menu
      )}" "${createShortcut(shortcut)}"`
    )
  })
  const length = keyboardShortcuts.length
  result.push(
    `echo "Set ${length} keyboard shortcut${length === 1 ? '' : 's'}"`
  )
  return result
})

function createMenu (menu) {
  return menu
    .map(function (string) {
      return `${ESCAPE_KEY}${string}`
    })
    .join('')
}

function createShortcut (shortcut) {
  return shortcut
    .map(function (keyboardKey) {
      const character = KEYBOARD_KEY_MAP[keyboardKey]
      return typeof character !== 'undefined' ? character : keyboardKey
    })
    .join('')
}
