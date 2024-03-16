const express = require("express");
const mongoose = require("mongoose");
const potd = require("./Data/Potd");
const oppo = require("./Data/Opportunities");
const editorial = require("./Data/Editorials");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: ["https://algozenith-nitc-codingclub.vercel.app"],
  methods: ["POST","GET","DELETE"],
  credentials: true
}));

// mongoose.connect("mongodb://localhost:27017/algo");
mongoose.connect("mongodb+srv://bavigaddaharsha:<MhwBXNMu3x6SYe2H>@cluster0.atppk1v.mongodb.net");

app.post("/admin", async (req, res) => {
  const { formdata, formType } = req.body;
  if (formType === "potd") {
    if (formdata.name === "leetcode") {
      var lc = formdata;
    }
    if (formdata.name === "gfg") {
      var gfg = formdata;
    }
    const datenow = new Date();
    const date = datenow.toDateString();
    const result = await potd.findOne({ date: date });
    if (result) {
      const v = Object.entries(result);
      const f = Object.entries(v[2][1]);
      console.log(f.length);
      if (f.length == 5) {
        res.json("Question already exists");
        return;
      }
      if (f[2][0] == "leetcode") {
        try {
          await potd.updateOne(
            { date: date },
            { $set: { geeksforgeeks: gfg } }
          );
          res.json("Posted");
          console.log("gfgposted");
        } catch (err) {
          console.log(err);
          res
            .status(500)
            .json({ message: "Error updating geeksforgeeks data" });
          return;
        }
      } else if (f[2][0] == "geeksforgeeks") {
        try {
          await potd.updateOne({ date: date }, { $set: { leetcode: lc } });
          res.json("Posted");
          console.log("lcposted");
        } catch (err) {
          console.log(err);
          res
            .status(500)
            .json({ message: "Error updating geeksforgeeks data" });
          return;
        }
      }
    } else {
      await potd.create({ date: date, geeksforgeeks: gfg, leetcode: lc });
      res.json("Posted");
    }
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

app.get("/potd", async (req, res) => {
  try {
    const result = await potd.find();
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
