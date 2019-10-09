import { exists, readFile } from 'fs-extra'
import getStdin from 'get-stdin'

import { createBashCommands } from '../common/create-bash-commands'
import { executeBashCommands } from '../common/execute-bash-commands'
import { outputBashCommands } from '../common/output-bash-commands'
import { parseConfig } from '../common/parse-config'

export async function set (file, script) {
  if (typeof file !== 'undefined' && (await exists(file)) === false) {
    return Promise.reject(new Error('File does not exist'))
  }
  try {
    const json =
      typeof file !== 'undefined'
        ? await readFile(file, 'utf8')
        : await getStdin()
    const config = JSON.parse(json)
    const keyboardShortcuts = parseConfig(config)
    const bashCommands = createBashCommands(keyboardShortcuts)
    if (script) {
      outputBashCommands(bashCommands)
      return Promise.resolve()
    }
    return executeBashCommands(bashCommands)
  } catch (error) {
    return Promise.reject(error)
  }
}
