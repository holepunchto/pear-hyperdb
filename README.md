# pear-hyperdb

[HyperDB](https://github.com/holepunchto/hyperdb) spec and model for [Pear](https://github.com/holepunchto/pear)

```
npm install pear-hyperdb
```

## Usage

### Model

```js
const Model = require('pear-hyperdb')
```

```js
const model = new Model(corestore)
const nodes = await model.getDhtNodes()
console.log(nodes)
```

### Spec

```js
const dbSpec = require('pear-hyperdb/spec/db')
```

## License

Apache-2.0
