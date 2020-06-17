import * as dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser';
import { registerPost } from './common'
import { helloService } from './hello-service';

dotenv.config()
const port = +process.env.PORT || 3000
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

registerPost(app, '/hello', helloService)

app.listen(port, err => {
  if (err) {
    return console.error(err)
  }
  return console.log(`server is listening on ${port}`)
})
