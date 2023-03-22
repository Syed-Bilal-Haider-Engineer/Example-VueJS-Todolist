const express = require("express");
const router = express.Router();
const mongomodal = require("../Schema/Postschema");
// get single data from mongoDB
router.get("/studentrecord/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const data = await mongomodal.findById({ _id });
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
//  get data from mongodb
router.get("/", async (req, res) => {
  try {
    const data = await mongomodal.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
//  post data in mongoos db
router.post("/studentrecord", async (req, res) => {
  try {
    let { firstname, lastname,country, city,Nationality, state}=req.body;
    const postdata = await new mongomodal({
      firstname,lastname,country,city,Nationality,state
    });
    postdata.save();
    if(postdata){
      res.status(200).json({
        success: true,
        message: "Student record Added Successfully!",
      });
    }else{
      res.status(400).json({
        success: false,
        message: "Student record Added Successfully!",
      });
    }
   
  } catch (err) {
    res.status(400).send(err);
  }
});


// .......Update data from MongoDB....
router.put("/studentrecord/:id", async (req, res) => {
  
  try {
    const _id = req.params.id;
    let { firstname, lastname,country, city,Nationality, state}=req.body;
    const data = await mongomodal.findByIdAndUpdate(_id, {
      firstname,lastname,country,city,Nationality,state
    });
   if(data){
    res.send(data);
   }
  } catch (error) {
    console.log(error);
  }
});
// .....Remove value from mongoDB...........
router.delete("/delete/:id", async (req, res) => {
  const _id = req.params.id.trim();
  try {
    const data = await mongomodal.findByIdAndDelete(_id);
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send("error", err);
  }
});
module.exports = router;
