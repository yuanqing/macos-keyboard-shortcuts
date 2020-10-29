import * as childProcess from 'child_process'

export async function resolveAppBundleId(appName: string): Promise<string> {
  const shellCommand = `osascript -e 'id of app "${appName}"'`
  return new Promise(function (resolve, reject) {
    const result: Array<string> = []
    const child = childProcess.exec(shellCommand, function (error) {
      if (error) {
        reject(error)
        return
      }
      resolve(result.join('').trim())
    })
    if (child.stdout === null) {
      throw new Error('Invariant violation')
    }
    child.stdout.on('data', function (data: string) {
      result.push(data.toString())
    })
  })
}
