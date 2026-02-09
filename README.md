# pear-hyperdb

[HyperDB](https://github.com/holepunchto/hyperdb) model for [Pear](https://github.com/holepunchto/pear)

```
npm install pear-hyperdb
```

## Usage

### Model

```js
const Model = require('pear-hyperdb')
const HyperDB = require('hyperdb')
const dbSpec = require('pear-hyperdb/spec/db')
```

```js
const rocks = HyperDB.rocks('./my-rocks.db', dbSpec)
const model = new Model(rocks)
await model.db.ready()

await model.setDhtNodes([{ host: 'holepunch.to', port: 8080 }])
const nodes = await model.getDhtNodes()
console.log(nodes)

await model.close()
```

### HyperDB Spec

```js
const dbSpec = require('pear-hyperdb/spec/db')
```

### Adding new fields

Expand the [Hyperschema](https://github.com/holepunchto/hyperschema) definition at [`build.js`](./build.js).

```bash
npm run build
```

## License

Apache-2.0
