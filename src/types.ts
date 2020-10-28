export type Config = { [appName: string]: MenuConfig }
export type MenuConfig = { [menuName: string]: string | MenuConfig }

export type KeyboardShortcut = {
  appBundleId: string
  menuPath: Array<string>
  keyboardKeys: Array<string>
}
