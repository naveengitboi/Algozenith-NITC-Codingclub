const express = require('express');
const mongoose = require('mongoose');
const potd = require('./Data/Potd');
const oppo = require('./Data/Opportunities');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS middleware
app.use(cors());

mongoose.connect("mongodb://localhost:27017/algo");

app.post('/admin', async (req, res) => {
    const {formdata,formType} = req.body;    
    if(formType === 'potd'){
        if (formdata.name === 'leetcode') {
            var lc = formdata;
        }
        if (formdata.name === 'gfg') {
            var gfg = formdata;
        }
        const datenow = new Date();
        const date = datenow.toDateString();
        const result = await potd.findOne({ date: date });
        if (result) {
            const v = Object.entries(result);
            const f = Object.entries(v[2][1])
            console.log(f.length);
            if(f.length ==5)
            {
                res.json("Question already exists");
                return;
            }
            if (f[2][0] == "leetcode") {
                try {
                    await potd.updateOne({ date: date }, { $set: { geeksforgeeks: gfg } });
                    res.json("Posted")
                    console.log("gfgposted");
                } catch (err) {
                    console.log(err);
                    res.status(500).json({ message: 'Error updating geeksforgeeks data' });
                    return;
                }
            }else if(f[2][0] == "geeksforgeeks"){
                try {
                    await potd.updateOne({ date: date }, { $set: { leetcode: lc } });
                    res.json("Posted")
                    console.log("lcposted");
                } catch (err) {
                    console.log(err);
                    res.status(500).json({ message: 'Error updating geeksforgeeks data' });
                    return;
                }
            }
        } else {
            await potd.create({ date: date, geeksforgeeks: gfg, leetcode: lc });
            res.json("Posted");
        }
    }
    else if(formType === 'oppo'){
        await oppo.create({companyname:formdata.companyname,logo:formdata.logo,jobtype:formdata.jobtype,jobrole:formdata.jobrole,
            location:formdata.location,salary:formdata.salary,batch:formdata.batch,apply:formdata.apply});
        res.json("oppo suc");
    }
    else{
        console.error("Error in posting things");
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.get('/potd', async (req, res) => {
    try {
        const result = await potd.find();
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/opportunities', async (req,res)=>{
    try{
        const out = await oppo.find();
        res.json(out);
    }catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log("Server started");
});
