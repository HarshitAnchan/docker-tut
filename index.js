const express = require("express");

const app = express();

app.get("/", (req, res)=> {
res.json([
{
    id:1,
    name: "harshit anchan",
    age: 22
},

{
    id:2,
    name: "Darshan jain",
    age: 21
},

{
    id:3,
    name: "Vishwajeet Menon",
    age: 23
},
{
    id:4,
    name: "Arun",
    age: 22
}

])
});

app.listen(5000, ()=> {
    console.log("app is running on 5000 port");


})