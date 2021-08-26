
const express = require("express");
const path = require("path");
const app = express();
const port = 80;
const bodyparser = require("body-parser")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contactDance', {useNewUrlParser: true, useUnifiedTopology: true});


//define mongoose schema
const contactSchema = new mongoose.Schema({
    name: String,
    Address: String,
    Phone: String,
    age: String,
    dance: String,
  });
  const contact = mongoose.model('contact', contactSchema);

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('home.pug', params);
})
app.get('/contact', (req, res)=>{
    const params = {}
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res)=>{
    var myData = new contact(req.body)
    myData.save().then(()=>{
        res.send("This items has been saved to the database")
    }).catch(()=>{
        res.status(400).send("items was not shift to the database")
    })
    
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});