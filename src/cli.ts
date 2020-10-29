#!/usr/bin/env node

import * as sade from 'sade'

import { set } from './commands/set'
import { unset } from './commands/unset'

sade('macos-keyboard-shortcuts')
  .command('set [file]')
  .describe('Sets the keyboard shortcuts as defined in the specified file')
  .option('-s, --script', 'Prints a shell script', false)
  .action(async function (file: string, { script }: { script: boolean }) {
    await set(file, script)
  })
  .example('set shortcuts.json')
  .example('set shortcuts.json --script')
  .command('unset [file]')
  .describe('Unsets the keyboard shortcuts as defined in the specified file')
  .option('-s, --script', 'Prints a shell script', false)
  .action(async function (file: string, { script }: { script: boolean }) {
    await unset(file, script)
  })
  .example('unset shortcuts.json')
  .example('unset shortcuts.json --script')
  .parse(process.argv)
