import Model from '../index.js'

const model = new Model(/* global.Pear corestore session */)
await model.db.ready()

const nodes = await model.getDhtNodes()
console.log(nodes)

await model.close()
