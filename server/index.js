const express = require ('express');
const mongoose = require('mongoose');
const userRouter = require("./Routers/userRouter");
const bookRouter = require("./Routers/bookRouter");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/books", bookRouter);
app.use("/users", userRouter);

mongoose.connect("mongodb+srv://admin:AIKY5opSTxh8HEPd@cluster0.riev2ii.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("connected database"))
.then(() => {
    app.listen(5000);
})
.catch((err)=> console.log(err));
