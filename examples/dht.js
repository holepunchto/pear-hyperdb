'use strict'

const Corestore = require('corestore')

let Model = null
try {
  Model = require('pear-hyperdb')
} catch {
  Model = require('..')
}

run()

async function run() {
  const corestore = new Corestore('./my-storage')
  await corestore.ready()

  const model = new Model(corestore)
  await model.db.ready()

  await model.setDhtNodes([{ host: 'holepunch.to', port: 8080 }])

  const nodes = await model.getDhtNodes()
  console.log(nodes)

  await model.close()
}
