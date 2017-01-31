const apis = require('electron-api-docs/tree')
const flat = require('flat')
const chain = require('lodash').chain

const list = flat(apis)

const keys = Object.keys(list)
const values = chain(Object.values(list))
  .filter(value => typeof value === 'string')
  .uniq()
  // .sort()
  .sort((a, b) => a.length - b.length)
  .value()

keys
  .filter(key => key.includes('description'))
  .forEach(key => {
    console.log(list[key])
  })
