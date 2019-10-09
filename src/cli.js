#!/usr/bin/env node

import sade from 'sade'
import { set } from './set/set'
import { unset } from './unset/unset'

sade('macos-keyboard-shortcuts')
  .command('set [file]')
  .describe('Sets the keyboard shortcuts as defined in the specified file')
  .option('-s, --script', 'Prints a bash script')
  .action(async function (file, { script }) {
    await set(file, script)
  })
  .command('unset [file]')
  .describe('Unsets the keyboard shortcuts as defined in the specified file')
  .option('-s, --script', 'Prints a bash script')
  .action(async function (file, { script }) {
    await unset(file, script)
  })
  .parse(process.argv)
