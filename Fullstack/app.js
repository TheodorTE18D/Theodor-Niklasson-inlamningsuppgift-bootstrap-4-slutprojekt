const express = require('express');
const ejs = require('ejs');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const userModel = require('./UserModule');
const msgModel = require('./msgModule');
const dbModule = require('./mongoDb');
const bcrypt = require('bcryptjs');
const clientDir = __dirname + "\\client\\";


app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(clientDir));

app.set('view engine', 'ejs');

app.get('/',  async (req, res) => {
  
  res.render('index.ejs');
  
});


app.get('/Message', (req, res) => {
  res.render('message.ejs');
});

app.get('/Info', (req, res) => {
  res.render('info.ejs');
});


app.get('/logIn', async (req, res) => {
  res.render('logIn.ejs');
});

app.get('/signUp', async (req, res) => {
  
  res.render('signUp.ejs');
});

app.post('/logIn', async (req, res) => {
  
  const user = await userModel.getOneUser(req.body.email);

  if (user){
    await bcrypt.compare(req.body.password, user.password, (err, success) =>{
      if(success){
        res.redirect('/');
      }
      else{
        console.log(err);
        res.send("Login failed");
      }
    });
  }
  else{
    res.send("User not found");
  }

  
});

app.post('/signUp',  async (req, res)  =>  {
    
    const encryptedPwd = await bcrypt.hash(req.body.password, 10);  
    const user = userModel.createUser(req.body.firstName, req.body.lastName, req.body.phoneNumber, req.body.email, encryptedPwd);
    
    await dbModule.storeElement(user);

    res.redirect('/');
    
});

app.post('/message', async (req, res) => {
  
  const msg = msgModel.createMsg(req.body.message);

  await dbModule.storeElement(msg);

  res.redirect('/message')
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));