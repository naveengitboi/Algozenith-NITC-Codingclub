const express = require("express");
const mongoose = require("mongoose");
const potd = require("./Data/Potd");
const oppo = require("./Data/Opportunities");
const editorial = require("./Data/Editorials");
const leetcode = require("./Data/Leetcode");
const gfg = require("./Data/Gfg");
const upcontest = require("./Data/Upcontest");
const UserModel = require("./Data/Login")
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const nodemailer = require('nodemailer');



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/algo");
// mongoose.connect("mongodb+srv://algozenith:nitc@cluster0.pknc4ob.mongodb.net/algozenith?retryWrites=true&w=majority");

/*** for login page ****/

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'rakesh.punugubati123@gmail.com',  //add algo zenith email id
      pass: 'qcgf vruc eqbx mrqp' // create a pass key and add here
  }
});
// Function to send password email
function sendPasswordEmail(password, recipient) {
  // Create the email options
  const mailOptions = {
      from: 'rakesh.punugubati123@gmail.com',  //add algo mail here
      to: 'rakesh.punugubati123@gmail.com',    // 
      subject: 'Your Password',
      text: `Your password is: ${password}`
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          console.error('Error occurred:', error);
      } else {
          console.log('Email sent:', info.response);
      }
  });
}

app.post('/login', (req, res) => {
  const { type, data } = req.body; 
  if (type === 'handleSubmit') {
      const { email, password } = data; 
      console.log(email, password);
      UserModel.findOne({ email, password })
      .then(function (user) {
          if (user) {
              const accessToken = jwt.sign({email: email}, "jwt-access-token-secret-key", {expiresIn: '1m'});
              const refreshToken = jwt.sign({email: email}, "jwt-refresh-token-secret-key", {expiresIn: '30m'});

              res.cookie('accessToken', accessToken, {maxAge: 60000})

              res.cookie('refreshToken' , refreshToken, {maxAge:1800000 , httpOnly: true , secure: true , sameSite:'strict'})
              res.json({ message: 'Valid user' });
          } else {
              res.json({ message: 'Invalid user' });
          }
      })
      .catch(function (err) {
          console.log(err);
          res.status(500).send("Error occurred");
      });
  } else if (type === 'togglepopup') {
      const { checkEmail } = data;
      console.log(checkEmail);
      UserModel.findOne({ email: checkEmail }) 
      .then(function (user) {
          if (user) {
              sendPasswordEmail(user.password, checkEmail);
              res.json({ message: 'Valid user' });
          } else {
              res.json({ message: 'Invalid user' });
          }
      })
      .catch(function (err) {
          console.log(err);
          res.status(500).send("Error occurred");
      });
  }
});

const verfyUser = (req, res, next) => {
  const accesstoken = req.cookies.accessToken;
  if(!accesstoken){
    if(renewToken(req, res)){
      next();
    }
  }else{
    jwt.verify(accesstoken ,"jwt-access-token-secret-key" ,(err , decoded) => {
      if(err){
        return res.json({valid :false, message: "Invalid Token"})
      }else{
        req.email = decoded.email;
        next()
      }
    })
  }
}

const renewToken = (req , res) => {
  const refreshtoken = req.cookies.refreshToken;
  let exist = false;
  if(!refreshtoken){
    return res.json({valid : false, message:"No refresh token"})
  }else{
    jwt.verify(refreshtoken ,"jwt-refresh-token-secret-key" ,(err , decoded) => {
      if(err){
        return res.json({valid :false, message: "Invalid Refresh Token"})
      }else{
        const accessToken = jwt.sign({email: decoded.email}, "jwt-access-token-secret-key", {expiresIn: '1m'});
        res.cookie('accessToken', accessToken, {maxAge: 60000})
        exist = true;
      }
    })
  }
  return exist;
}

app.get("/admin" ,verfyUser, (req, res) => {
  return res.json({valid: true, message: "autorized"})
})

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
      contestnumber: formdata.contestnumber,
      date: formdata.date,
      contestlink: formdata.contestlink,
      solutionlink: formdata.solutionlink,
    });
    res.json("editorial posted");
  }else if(formType === "upcontest"){
    await upcontest.create({
      upplatform: formdata.upplatform,
      contesttype: formdata.contesttype,
      update: formdata.update,
      uplink: formdata.uplink,  
    });
    res.json("upcontest posted");
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

app.get("/upcontest", async (req, res) => {
  try {
    const upcontestdata = await upcontest.find();
    res.json(upcontestdata);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server started");
});
