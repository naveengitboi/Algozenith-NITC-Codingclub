const express = require('express');
const mongoose = require('mongoose');
const potdgfg  = require('./Data/Potd');
const potdlc = require('./Data/Potdlc');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS middleware
app.use(cors());

mongoose.connect("mongodb://localhost:27017/algo");

app.post('/admin/gfg', (req,res)=>{
    const body = req.body;
    const datenow = new Date();
    const date = datenow.toDateString();
    potdgfg.findOne({date:date})
    .then(result =>{
        if(result)
             res.json("Question already exists")
        else{
            potdgfg.create({date:date,details:body})
            .then(r => res.json("Posted"))
            .catch(e => res.json(e));
        }
    })
    .catch(err => console.log(err))
});

app.post('/admin/lc', (req,res)=>{
    const body = req.body;
    const datenow = new Date();
    const date = datenow.toDateString();
    potdlc.findOne({date:date})
    .then(result =>{
        if(result)
             res.json("Question already exists")
        else{
            potdlc.create({date:date,details:body})
            .then(r => res.json("Posted"))
            .catch(e => res.json(e));
        }
    })
    .catch(err => console.log(err))
});

app.get('/potd', async (req, res) => {
    try {
      // Query the database to find the most recent two data objects
      const latestTwoData = await potd.find().sort({ _id: -1 }).limit(2).exec();
      res.json(latestTwoData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
});


const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log("Server started");
});