const commandFactory = require('../command-factory')
const DEFAULTS_KEY = require('../constants')
const { ESCAPE_KEY, KEYBOARD_KEY_MAP, NULL } = require('./keyboard')
const parseConfig = require('./parse-config')

const set = commandFactory(function (config) {
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
      if (keyboardKey === '') {
        return NULL
      }
      const character = KEYBOARD_KEY_MAP[keyboardKey]
      return typeof character !== 'undefined' ? character : keyboardKey
    })
    .join('')
}

module.exports = set
