const fs = require('fs')
const path = require('path')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

const devServerBaseURL = process.env.DEV_SERVER_BASE_URL || 'http://localhost'
const devServerPort = process.env.DEV_SERVER_PORT || 4242

const app = express()
app.use('/js', express.static(path.resolve(__dirname, '../dist/js')))
app.use('/css', express.static(path.resolve(__dirname, '../dist/css')))
app.use('/img', express.static(path.resolve(__dirname, '../dist/img')))
app.use('/favicon', express.static(path.resolve(__dirname, '../dist/favicon')))

const templatePath = path.resolve(__dirname, '../dist/index.ssr.html')
const bundle = require('../dist/vue-ssr-server-bundle.json')
const template = fs.readFileSync(templatePath, 'utf-8')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')

let renderer = createBundleRenderer(bundle, {
  runInNewContext: false,
  template,
  clientManifest
})

app.get('*', (req, res) => {
  const context = { url: req.url }
  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.message === 404) {
        res.status(404).end('Page not found')
      } else {
        res.status(500).end('Internal Server Error')
      }
    } else {
      res.end(html)
    }
  })
})

app.listen(devServerPort, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`server listen in ${devServerBaseURL}:${devServerPort}`)
  }
})
