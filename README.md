# macos-keyboard-shortcuts [![npm Version](https://img.shields.io/npm/v/macos-keyboard-shortcuts?cacheSeconds=1800)](https://www.npmjs.org/package/macos-keyboard-shortcuts) [![build](https://github.com/yuanqing/macos-keyboard-shortcuts/workflows/build/badge.svg)](https://github.com/yuanqing/macos-keyboard-shortcuts/actions?query=workflow%3Abuild)

> A CLI to set application-specific keyboard shortcuts for macOS

## Quick start

*Requires [Node.js](https://nodejs.org/).*

```
$ cat shortcuts.json
{
  "Figma": {
    "Arrange": {
      "Align Bottom": "cmd ctrl b",
      "Align Horizontal Centers": "cmd ctrl h",
      "Align Left": "cmd ctrl l",
      "Align Right": "cmd ctrl r",
      "Align Top": "cmd ctrl t",
      "Align Vertical Centers": "cmd ctrl v"
    },
    "Plugins": {
      "Distribute Layers": {
        "Distribute Layers Left": "cmd shift l",
        "Distribute Layers Right": "cmd shift r",
        "Distribute Layers Up": "cmd shift u",
        "Distribute Layers Down": "cmd shift d"
      },
      "Move Layers": "cmd shift m"
    }
  }
}
$ npx macos-keyboard-shortcuts set shortcuts.json
Set 11 keyboard shortcuts
```

See that:

- The path to each menu item is specified via a nested JSON object. The root keys correspond to the macOS applications names.
- The keyboard keys in each shortcut are separated by a space. Use `cmd`, `ctrl`, `opt`, and `shift` for modifier keys, and `up`, `down`, `left`, and `right` for arrow keys.

## Usage

<!-- ``` markdown-interpolate: node lib/cli.js set --help -->
```

  Description
    Sets the keyboard shortcuts as defined in the specified file

  Usage
    $ macos-keyboard-shortcuts set [file] [options]

  Options
    -s, --script    Prints a shell script  (default false)
    -h, --help      Displays this message

  Examples
    $ macos-keyboard-shortcuts set shortcuts.json
    $ macos-keyboard-shortcuts set shortcuts.json --script

```
<!-- ``` end -->

<!-- ``` markdown-interpolate: node lib/cli.js unset --help -->
```

  Description
    Unsets the keyboard shortcuts as defined in the specified file

  Usage
    $ macos-keyboard-shortcuts unset [file] [options]

  Options
    -s, --script    Prints a shell script  (default false)
    -h, --help      Displays this message

  Examples
    $ macos-keyboard-shortcuts unset shortcuts.json
    $ macos-keyboard-shortcuts unset shortcuts.json --script

```
<!-- ``` end -->

## Installation

```
$ npm install --global macos-keyboard-shortcuts
```

## License

[MIT](/LICENSE.md)
