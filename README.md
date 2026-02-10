# pear-hyperdb

[HyperDB](https://github.com/holepunchto/hyperdb) model for [Pear](https://github.com/holepunchto/pear)

```
npm install pear-hyperdb
```

## Usage

```js
const { spec, Model } = require('pear-hyperdb')
const HyperDB = require('hyperdb')
```

```js
const rocks = HyperDB.rocks('./my-rocks.db', spec)
const model = new Model(rocks)
await model.db.ready()

await model.setDhtNodes([{ host: 'holepunch.to', port: 8080 }])
const nodes = await model.getDhtNodes()
console.log(nodes)

await model.close()
```

## Modifyng the schema

Edit the [Hyperschema](https://github.com/holepunchto/hyperschema) definition at [`build.js`](./build.js), then run:

```bash
npm run build
```

## License

Apache-2.0
