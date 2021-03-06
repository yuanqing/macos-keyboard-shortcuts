import * as fs from 'fs'
import * as getStdin from 'get-stdin'

import { KeyboardShortcut } from '../../types'
import { executeShellCommands } from './execute-shell-commands'
import { outputShellCommands } from './output-shell-commands'
import { parseConfig } from './parse-config/parse-config'

export function commandFactory(
  createShellCommands: (
    keyboardShortcuts: Array<KeyboardShortcut>
  ) => Array<string>
) {
  return async function set(file: string, script: boolean): Promise<void> {
    if (typeof file !== 'undefined' && fs.existsSync(file) === false) {
      throw new Error('File does not exist')
    }
    const json =
      typeof file !== 'undefined'
        ? fs.readFileSync(file, 'utf8')
        : await getStdin()
    const keyboardShortcuts = await parseConfig(JSON.parse(json))
    const shellCommands = createShellCommands(keyboardShortcuts)
    if (script === true) {
      outputShellCommands(shellCommands)
      return
    }
    await executeShellCommands(shellCommands)
  }
}
