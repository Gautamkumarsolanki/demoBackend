const express = require("express");
const Student = require("../models/Student");
const router = express.Router();

router.get("/get", async (req, res) => {
  try {
    const data = await Student.find({});
    res.send(data);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.post("/post", async (req, res) => {
  const { name, roll, course, institute, blood_group } = req.body;
  let newStudent;

  try {
    if (blood_group == undefined)
      newStudent = new Student({
        name: name,
        roll: roll,
        course: course,
        institute: institute,
      });
    else
      newStudent = new Student({
        name: name,
        roll: roll,
        course: course,
        institute: institute,
        blood_group: blood_group,
      });
    const result = await newStudent.save();
    res.send(result);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

router.delete("/delete/:id",async (req, res) => {
  try{
    const result=await Student.deleteOne({_id:req.params.id});
    res.send(result);
  }catch(error){
    res.status(500).send("Server Error");
  }
});

router.put("/update/:id",async (req, res) => {
  const {name,roll,course,institute,blood_group}=req.body;
  let data;
  try{
    if(blood_group==undefined)data=await Student.findByIdAndUpdate(req.params.id,{name,roll,course,institute})
    else data=await Student.findByIdAndUpdate(req.params.id,{name,roll,course,institute,blood_group},{returnDocument:'after'});
    res.send(data)
  }catch(error){
    res.status(500).send("Server Error");
  }
});
module.exports = router;
