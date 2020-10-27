// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'outputBash... Remove this comment to see the full error message
function outputBashCommands (bashCommands: any) {
  console.log('#!/bin/bash')
  bashCommands.forEach(function (bashCommand: any) {
    console.log(bashCommand)
  })
}

module.exports = outputBashCommands
