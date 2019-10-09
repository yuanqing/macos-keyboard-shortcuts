import { exists, readFile } from 'fs-extra'
import getStdin from 'get-stdin'
import { executeBashCommands } from './execute-bash-commands'
import { outputBashCommands } from './output-bash-commands'

export function commandFactory (createBashCommands) {
  return async function set (file, script) {
    if (typeof file !== 'undefined' && (await exists(file)) === false) {
      return Promise.reject(new Error('File does not exist'))
    }
    try {
      const json =
        typeof file !== 'undefined'
          ? await readFile(file, 'utf8')
          : await getStdin()
      const config = JSON.parse(json)
      const bashCommands = createBashCommands(config)
      if (script) {
        outputBashCommands(bashCommands)
        return Promise.resolve()
      }
      return executeBashCommands(bashCommands)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
