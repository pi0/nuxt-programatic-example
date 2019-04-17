const { Nuxt, Builder } = require('nuxt')
const express = require('express')
const config = require('./nuxt.config')

const dev = process.env.NODE_ENV !== 'production'

const nuxt = new Nuxt({ ...config, dev })

if (dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

const app = express()
app.use(nuxt.render)
app.listen(3000)
