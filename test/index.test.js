'use strict'
const test = require('brittle')
const tmp = require('test-tmp')
const path = require('path')
const HyperDB = require('hyperdb')
const { spec, Model } = require('..')

async function tmpRocks() {
  const dir = await tmp()
  const rocks = HyperDB.rocks(path.join(dir, 'rocks.db'), spec)
  return { rocks, dir }
}

test('DHT', async function (t) {
  const { rocks } = await tmpRocks()
  const model = new Model(rocks)
  await model.db.ready()
  const nodes = [
    { host: '127.0.0.1', port: 1234 },
    { host: 'holepunch.to', port: 8080 }
  ]
  await model.setDhtNodes(nodes)
  t.alike(await model.getDhtNodes(), nodes)
  await model.close()
})

test('Manifest', async function (t) {
  const { rocks } = await tmpRocks()
  const model = new Model(rocks)
  await model.db.ready()

  await model.setManifest(1)
  t.alike(await model.getManifest(), { version: 1 })

  await model.close()
})

test('Traits', async function (t) {
  const { rocks, dir } = await tmpRocks()
  const model = new Model(rocks)
  await model.db.ready()

  const link = 'pear://runtime'
  const appStorage = path.join(dir, 'app')

  await model.addTraits(link, appStorage)
  t.is(await model.getAppStorage(link), appStorage)

  await model.close()
})

test('Currents', async function (t) {
  const { rocks } = await tmpRocks()
  const model = new Model(rocks)
  await model.db.ready()

  const link = 'pear://runtime'
  await model.setCurrent(link, { fork: 1, length: 2 })
  const current = await model.getCurrent(link)

  t.is(current.checkout.fork, 1)
  t.is(current.checkout.length, 0)

  await model.close()
})

test('Assets', async function (t) {
  const { rocks, dir } = await tmpRocks()
  const model = new Model(rocks)
  await model.db.ready()

  const link = 'pear://0.1.runtime'
  await model.addAsset(link, {
    ns: 'ui',
    name: 'main',
    only: false,
    pack: false,
    path: path.join(dir, 'asset')
  })
  const asset = await model.getAsset(link)

  t.is(asset.ns, 'ui')
  t.is(asset.name, 'main')

  await model.close()
})

test('GC', async function (t) {
  const { rocks, dir } = await tmpRocks()
  const model = new Model(rocks)
  await model.db.ready()

  const link = 'pear://runtime'
  await model.addTraits(link, path.join(dir, 'app'))
  const oldStorage = path.join(dir, 'old')
  await model.updateAppStorage(link, path.join(dir, 'new'), oldStorage)
  const gc = await model.allGc()

  t.is(gc.length, 1)
  t.is(gc[0].path, oldStorage)

  await model.close()
})
