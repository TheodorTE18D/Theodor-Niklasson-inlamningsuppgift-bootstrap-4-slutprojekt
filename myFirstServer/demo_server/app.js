const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

});
const personSchema = new mongoose.Schema({
    name: String,
    email: String
  });

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

  const people = mongoose.model('People', personSchema);
  const person = new people({ name: 'fluffy' });

    app.post('/', (req, res)  =>  {
    console.log(req.body.email)
    console.log(req.body.name)
      
    person.save();
    res.redirect('/')
    
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

