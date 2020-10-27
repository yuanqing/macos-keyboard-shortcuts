#!/usr/bin/env node

const sade = require('sade')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'set'.
const set = require('./set/set')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'unset'.
const unset = require('./unset/unset')

sade('macos-keyboard-shortcuts')
  .command('set [file]')
  .describe('Sets the keyboard shortcuts as defined in the specified file')
  .option('-s, --script', 'Prints a bash script')
  .action(async function (file: any, {
  script
}: any) {
    await set(file, script)
  })
  .example('set shortcuts.json')
  .example('set shortcuts.json --script')
  .command('unset [file]')
  .describe('Unsets the keyboard shortcuts as defined in the specified file')
  .option('-s, --script', 'Prints a bash script')
  .action(async function (file: any, {
  script
}: any) {
    await unset(file, script)
  })
  .example('unset shortcuts.json')
  .example('unset shortcuts.json --script')
  .parse(process.argv)
