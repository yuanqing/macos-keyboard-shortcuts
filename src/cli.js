#!/usr/bin/env node

const sade = require('sade')
const set = require('./set/set')
const unset = require('./unset/unset')

sade('macos-keyboard-shortcuts')
  .command('set [file]')
  .describe('Sets the keyboard shortcuts as defined in the specified file')
  .option('-s, --script', 'Prints a bash script')
  .action(async function (file, { script }) {
    await set(file, script)
  })
  .example('set shortcuts.json')
  .example('set shortcuts.json --script')
  .command('unset [file]')
  .describe('Unsets the keyboard shortcuts as defined in the specified file')
  .option('-s, --script', 'Prints a bash script')
  .action(async function (file, { script }) {
    await unset(file, script)
  })
  .example('unset shortcuts.json')
  .example('unset shortcuts.json --script')
  .parse(process.argv)
