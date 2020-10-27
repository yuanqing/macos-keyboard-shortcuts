// @ts-expect-error ts-migrate(2451) FIXME: Cannot redeclare block-scoped variable 'parseConfi... Remove this comment to see the full error message
function parseConfig (config: any) {
  const result: any = []
  for (const domain in config) {
    const shortcuts = config[domain]
    for (const key in shortcuts) {
      parseItem(domain, shortcuts[key], [key], result)
    }
  }
  return result
}

const singleSpaceRegex = /\s/

function parseItem (domain: any, shortcuts: any, menu: any, result: any) {
  if (typeof shortcuts === 'string') {
    result.push({
      domain,
      menu,
      shortcut: shortcuts.split(singleSpaceRegex)
    })
    return
  }
  for (const key in shortcuts) {
    parseItem(domain, shortcuts[key], [...menu, key], result)
  }
}

module.exports = parseConfig
