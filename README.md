# macos-keyboard-shortcuts [![npm Version](https://img.shields.io/npm/v/macos-keyboard-shortcuts)](https://www.npmjs.org/package/macos-keyboard-shortcuts) [![Build Status](https://img.shields.io/travis/yuanqing/macos-keyboard-shortcuts.svg)](https://travis-ci.org/yuanqing/macos-keyboard-shortcuts)

> A command-line utility to set application-specific keyboard shortcuts for macOS

## Quick start

Requires [Node.js](https://nodejs.org/).

```
$ cat shortcuts.json
{
  "com.figma.Desktop": {
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
      "Move Layers": "cmd shift m",
    }
  }
}
$ npm install --global macos-keyboard-shortcuts
$ macos-keyboard-shortcuts set shortcuts.json
Set 11 keyboard shortcuts
```

- The path to each menu item is specified via a nested JSON object.
- The keys in each shortcut are separated by a space.
- Use `cmd`, `ctrl`, `opt`, and `shift` for modifier keys, and `up`, `down`, `left`, and `right` for arrow keys.

## Usage

```
$ macos-keyboard-shortcuts --help

  Usage
    $ macos-keyboard-shortcuts <command> [options]

  Available Commands
    set      Sets the keyboard shortcuts as defined in the specified file
    unset    Unsets the keyboard shortcuts as defined in the specified file

  For more info, run any command with the `--help` flag
    $ macos-keyboard-shortcuts set --help
    $ macos-keyboard-shortcuts unset --help

  Options
    -v, --version    Displays current version
    -h, --help       Displays this message

```

## Installation

```
$ npm install --global macos-keyboard-shortcuts
```

## License

[MIT](LICENSE.md)
