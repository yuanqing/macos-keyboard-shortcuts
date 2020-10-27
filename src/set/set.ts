// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'commandFac... Remove this comment to see the full error message
const commandFactory = require('../command-factory')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'DEFAULTS_K... Remove this comment to see the full error message
const DEFAULTS_KEY = require('../constants')
const { ESCAPE_KEY, KEYBOARD_KEY_MAP, NULL } = require('./keyboard')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'parseConfi... Remove this comment to see the full error message
const parseConfig = require('./parse-config')

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'set'.
const set = commandFactory(function (config: any) {
  const keyboardShortcuts = parseConfig(config)
  const result = []
  keyboardShortcuts.forEach(function ({
    domain,
    menu,
    shortcut
  }: any) {
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

function createMenu (menu: any) {
  return menu
    .map(function (string: any) {
      return `${ESCAPE_KEY}${string}`
    })
    .join('');
}

function createShortcut (shortcut: any) {
  return shortcut
    .map(function (keyboardKey: any) {
      if (keyboardKey === '') {
        return NULL
      }
      const character = KEYBOARD_KEY_MAP[keyboardKey]
      return typeof character !== 'undefined' ? character : keyboardKey
    })
    .join('');
}

module.exports = set
