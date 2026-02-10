import HyperDB from 'hyperdb'
import pkg from '../index.js'

const rocks = HyperDB.rocks('./my-rocks.db', pkg.spec)
const model = new pkg.Model(rocks)
await model.db.ready()

await model.setDhtNodes([{ host: 'holepunch.to', port: 8080 }])
const nodes = await model.getDhtNodes()
console.log(nodes)

await model.close()
