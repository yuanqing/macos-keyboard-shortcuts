import execa from 'execa'
import pEachSeries from 'p-each-series'

export function executeBashCommands (bashCommands) {
  return pEachSeries(bashCommands, async function (bashCommand) {
    const { stdout } = await execa.command(bashCommand, { shell: true })
    if (stdout.length !== 0) {
      console.log(stdout)
    }
  })
}
