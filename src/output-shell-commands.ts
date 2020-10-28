/* eslint-disable no-console */

export function outputShellCommands(shellCommands: Array<string>): void {
  console.log('#!/bin/sh')
  shellCommands.forEach(function (shellCommand: string) {
    console.log(shellCommand)
  })
}
