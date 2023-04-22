const mongoose=require('mongoose');

const studentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    institute:{
        type:String,
        required:true
    },
    blood_group:{
        type:String
    }
})

module.exports= mongoose.model('student',studentSchema);