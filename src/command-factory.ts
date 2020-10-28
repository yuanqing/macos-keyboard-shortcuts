import * as fs from 'fs-extra'
import * as getStdin from 'get-stdin'

import { executeShellCommands } from './execute-shell-commands'
import { outputShellCommands } from './output-shell-commands'
import { parseConfig } from './parse-config'
import { KeyboardShortcut } from './types'

export function commandFactory(
  createShellCommands: (
    keyboardShortcuts: Array<KeyboardShortcut>
  ) => Array<string>
) {
  return async function set(file: string, script: boolean): Promise<void> {
    if (typeof file !== 'undefined' && (await fs.pathExists(file)) === false) {
      throw new Error('File does not exist')
    }
    const json =
      typeof file !== 'undefined'
        ? await fs.readFile(file, 'utf8')
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
