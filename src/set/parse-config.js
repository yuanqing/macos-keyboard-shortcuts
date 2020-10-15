function parseConfig (config) {
  const result = []
  for (const domain in config) {
    const shortcuts = config[domain]
    for (const key in shortcuts) {
      parseItem(domain, shortcuts[key], [key], result)
    }
  }
  return result
}

const singleSpaceRegex = /\s/

function parseItem (domain, shortcuts, menu, result) {
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
