import * as childProcess from 'child_process'
import * as pEachSeries from 'p-each-series'

export async function executeShellCommands(
  shellCommands: Array<string>
): Promise<void> {
  await pEachSeries(shellCommands, async function (shellCommand: string) {
    return new Promise(function (resolve, reject) {
      const child = childProcess.exec(shellCommand, function (error) {
        if (error) {
          reject(error)
          return
        }
        resolve()
      })
      if (child.stdout === null) {
        throw new Error('')
      }
      child.stdout.pipe(process.stdout)
    })
  })
}
