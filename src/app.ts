import express from 'express'
import bodyParser from 'body-parser';
import { registerPost } from './common'
import { helloService } from './hello-service';
import { loadSettings } from './settings';

const setup = loadSettings()
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

registerPost(app, '/hello', helloService)

app.listen(setup.port, err => {
  if (err) {
    return console.error(err)
  }
  return console.log(`server is listening on ${setup.port}`)
})
