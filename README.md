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

await model.setDhtNodes([...(await model.getDhtNodes()), { host: 'holepunch.to', port: 8080 }])
console.log(await model.getDhtNodes())

await model.close()
```

## Example

```bash
node examples/dht.mjs
```

## Modifying the schema

Edit the definition in [`builder.js`](./builder.js) ([Hyperschema](https://github.com/holepunchto/hyperschema)), then run:

```bash
npm run build
```

`./spec/` will get updated and must be committed to the repository.

## License

Apache-2.0
