const { pathExists, readFile } = require('fs-extra')
const getStdin = require('get-stdin')
const executeBashCommands = require('./execute-bash-commands')
const outputBashCommands = require('./output-bash-commands')

function commandFactory (createBashCommands) {
  return async function set (file, script) {
    if (typeof file !== 'undefined' && (await pathExists(file)) === false) {
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

module.exports = commandFactory
