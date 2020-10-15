const execa = require('execa')
const pEachSeries = require('p-each-series')

function executeBashCommands (bashCommands) {
  return pEachSeries(bashCommands, async function (bashCommand) {
    const { stdout } = await execa.command(bashCommand, { shell: true })
    if (stdout.length !== 0) {
      console.log(stdout)
    }
  })
}

module.exports = executeBashCommands
