import express from 'express'
import bodyParser from 'body-parser';
import { registerService } from './common'
import { helloService } from './hello-service';

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (_req, res) => {
  res.send('Use Advanced Rest Client extension in Chrome to test')
})

registerService(app, '/hello', helloService)

app.listen(port, err => {
  if (err) {
    return console.error(err)
  }
  return console.log(`server is listening on ${port}`)
})
