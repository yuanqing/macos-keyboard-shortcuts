const { pathExists, readFile } = require('fs-extra')
const getStdin = require('get-stdin')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'executeBas... Remove this comment to see the full error message
const executeBashCommands = require('./execute-bash-commands')
// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'outputBash... Remove this comment to see the full error message
const outputBashCommands = require('./output-bash-commands')

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'commandFac... Remove this comment to see the full error message
function commandFactory (createBashCommands: any) {
  return async function set (file: any, script: any) {
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
  };
}

module.exports = commandFactory
