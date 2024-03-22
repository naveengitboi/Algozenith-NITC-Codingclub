const express = require("express");
const mongoose = require("mongoose");
const potd = require("./Data/Potd");
const oppo = require("./Data/Opportunities");
const editorial = require("./Data/Editorials");
const leetcode = require("./Data/Leetcode");
const gfg = require("./Data/Gfg");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

mongoose.connect("mongodb://localhost:27017/algo");
// mongoose.connect("mongodb+srv://algozenith:nitc@cluster0.pknc4ob.mongodb.net/algozenith?retryWrites=true&w=majority");

app.post("/admin", async (req, res) => {
  const { formdata, formType } = req.body;
  if (formType === "leetcode") {
    const datenow = new Date();
    const dat = datenow.toDateString();
    const date = dat.substring(4);
    leetcode.findOne({date:date})
    .then(found => {
      if(found){
        res.json("Question already exists");
      }
      else
      {
         leetcode.create({
          date: date,
          question: formdata.question,
          quesname: formdata.quesname,
          concept: formdata.concept,
          companies: formdata.companies,
          level: formdata.level,
          solution: formdata.solution,
        })
        .then(()=>res.json("Posted"))
        .catch((err)=>res.json("Error"));
      }
    })
    .catch((err)=>res.json("Error")) 
  } else if (formType === "gfg") {
    const datenow = new Date();
    const dat = datenow.toDateString();
    const date = dat.substring(4);
    gfg.findOne({date:date})
    .then(found => {
      if(found){
        res.json("Question already exists");
      }
      else
      {
         gfg.create({
          date: date,
          question: formdata.question,
          quesname: formdata.quesname,
          concept: formdata.concept,
          companies: formdata.companies,
          level: formdata.level,
          solution: formdata.solution,
        })
        .then(()=>res.json("Posted"))
        .catch((err)=>res.json("Error"));
      }
    })
    .catch((err)=>res.json("Error"))
  } else if (formType === "oppo") {
    await oppo.create({
      companyname: formdata.companyname,
      logo: formdata.logo,
      jobtype: formdata.jobtype,
      jobrole: formdata.jobrole,
      location: formdata.location,
      salary: formdata.salary,
      batch: formdata.batch,
      apply: formdata.apply,
    });
    res.json("opportunity posted");
  } else if (formType === "editorials") {
    await editorial.create({
      platformname: formdata.platformname,
      constestnumber: formdata.constestnumber,
      date: formdata.date,
      contestlink: formdata.contestlink,
      solutionlink: formdata.solutionlink,
    });
    res.json("editorial posted");
  } else {
    console.error("Error in posting things");
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/admin", async (req, res) => {
  const meta = req.body.meta;
  console.log(meta);
  if (meta === "potd") {
    const datenow = new Date();
    const date = datenow.toDateString();
    await potd.deleteOne({ date: date });
    res.send("potd del");
  } else if (meta === "oppo") {
    const latest = await oppo.findOneAndDelete({}, { sort: { _id: -1 } });
    if (latest) {
      res.send("oppo del");
    } else {
      console.log("No document found for deletion");
      res.status(404).send("404");
    }
  } else if (meta === "editorial") {
    const latest = await editorial.findOneAndDelete({}, { sort: { _id: -1 } });
    if (latest) {
      res.send("editorial del");
    } else {
      console.log("No document found for deletion");
      res.status(404).send("404 ok");
    }
  }
});

app.get("/gfg", async (req, res) => {
  try {
    const result = await gfg.find();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/leetcode", async (req, res) => {
  try {
    const result = await leetcode.find();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/opportunities", async (req, res) => {
  try {
    const out = await oppo.find();
    res.json(out);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/editorials", async (req, res) => {
  try {
    const editdata = await editorial.find();
    res.json(editdata);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server started");
});
