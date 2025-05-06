const express= require("express");
const app =express();

app.get("/",(req,res)=>{
    res.json([
        {
            id:1,
            name:"praanv tiwari",
            age:34
        },
        {
            id:5,
            name:"ptyrhv",
            age:53
        },
        
    ])
});
app.listen(5500,()=>{
    console.log("app is running in 5500 port")
})