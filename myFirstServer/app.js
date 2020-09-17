const express = require('express')
const app = express()
const port = 5500

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
    console.log(req.body.email)
    console.log(req.body.name)
    res.redirect('/')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

