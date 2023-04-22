const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.text())

const connectDB = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      app.listen(PORT,()=>console.log(`connected and running on server ${PORT}`));
      
})
    .catch(() => {
      console.log("Error Ocurred");
    });
};
connectDB();
app.use("/",(req,res)=>{
  res.send("Welcome");
})
app.use("/api",require('./routes/routes'))
