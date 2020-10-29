import { Config, KeyboardShortcut, MenuConfig } from '../../../types'
import { resolveAppBundleId } from './resolve-app-bundle-id'

export async function parseConfig(
  config: Config
): Promise<Array<KeyboardShortcut>> {
  const result: Array<KeyboardShortcut> = []
  for (const appName in config) {
    const menuConfig = config[appName]
    const appBundleId = await resolveAppBundleId(appName)
    for (const key in menuConfig) {
      parseItem(appBundleId, menuConfig[key], [key], result)
    }
  }
  return result
}

const singleSpaceRegex = /\s/

function parseItem(
  appBundleId: string,
  menuConfig: string | MenuConfig,
  menuPath: Array<string>,
  result: any
): void {
  if (typeof menuConfig === 'string') {
    result.push({
      appBundleId,
      keyboardKeys: menuConfig.split(singleSpaceRegex),
      menuPath: menuPath
    })
    return
  }
  for (const key in menuConfig) {
    parseItem(appBundleId, menuConfig[key], [...menuPath, key], result)
  }
}
