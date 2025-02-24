import express from "express"
import path from 'path'
const app = express()
const port = process.env.PORT||1000

// const __dirname = path.resolve()
// app.use('/', express.static(path.join(__dirname, './web/dist')))
app.use(cors())
app.get('/', (req, res) => {
    console.log(req.ip);
  res.send('Hello Laiba Qazi!')
})
app.get('/', (req, res) => {
  console.log(req.ip);
res.send('Hello Server it is Laiba Qazi! Backend world!')
})
app.get('/weather', (req, res) => {

res.send(req.params)
})
app.get('/weather/:cityName', (req, res) => {

res.send(req.params.cityName)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//  192.168.228.23:1000