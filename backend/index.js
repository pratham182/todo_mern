const express=require("express");
const { createTodo, updateTodo } = require("./type");

const app=express();
app.use(express.json());


app.post("/todo",(req,res)=>{
   const createPayload=req.body;
   const parsedPayload=createTodo.safeParse(createPayload);
   if(!parsedPayload.success){
    res.status(411).json({
        msg:"You sent the wrong input"

    });
    return ;
   }
   //put in mongodb 

});

app.get("/getTodo",(req,res)=>{

})

app.put("/completed",(req,res)=>{
    const createPayload=req.body;
    const parsedPayload=updateTodo.safeParse(createPayload);
   if(!parsedPayload.success){
    res.status(411).json({
        msg:"You sent the wrong input"

    });
    return ;
}
})

app.listen(1000,()=>{
    console.log("Running on port no 1000");
})


//zod == for validation user send right thing 