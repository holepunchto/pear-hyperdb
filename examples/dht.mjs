import Corestore from 'corestore'
import Model from '../index.js'

const corestore = new Corestore('./my-storage')
await corestore.ready()

const model = new Model(corestore)
await model.db.ready()

// await model.setDhtNodes([{ host: 'holepunch.to', port: 8080 }])
const nodes = await model.getDhtNodes()
console.log(nodes)

await model.close()
