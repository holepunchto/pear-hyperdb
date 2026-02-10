import HyperDB from 'hyperdb'
import { spec, Model } from '../index.js'

const rocks = HyperDB.rocks('./my-rocks.db', spec)
const model = new Model(rocks)
await model.db.ready()

await model.setDhtNodes([{ host: 'holepunch.to', port: 8080 }])
const nodes = await model.getDhtNodes()
console.log(nodes)

await model.close()
