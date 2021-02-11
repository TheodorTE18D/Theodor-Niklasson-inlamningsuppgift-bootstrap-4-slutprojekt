const express = require('express')
const app = express()
const port = 3000

const clientDir = __dirname + "\\client\\"

app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => res.sendFile(clientDir + "index.html"))
app.get('/', (req, res) => {
    res.sendFile(clientDir + "styleIndex.css")
})
app.get('/zombies', (req, res) => {
    res.sendFile(clientDir + "zombie.png")
  })

app.post('/', (req, res)  =>  {
    console.log(req.body.name)
    console.log(req.body.email)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

