const execa = require('execa')
const pEachSeries = require('p-each-series')

// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'executeBas... Remove this comment to see the full error message
function executeBashCommands (bashCommands: any) {
  return pEachSeries(bashCommands, async function (bashCommand: any) {
    const { stdout } = await execa.command(bashCommand, { shell: true })
    if (stdout.length !== 0) {
      console.log(stdout)
    }
  });
}

module.exports = executeBashCommands
