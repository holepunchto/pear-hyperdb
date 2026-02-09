import Model from '../index.js'
import HyperDB from 'hyperdb'
import dbSpec from '../spec/db/index.js'

const rocks = HyperDB.rocks('./my-rocks.db', dbSpec)
const model = new Model(rocks)
await model.db.ready()

await model.setDhtNodes([{ host: 'holepunch.to', port: 8080 }])
const nodes = await model.getDhtNodes()
console.log(nodes)

await model.close()
