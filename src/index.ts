import express  from "express";
import  {PrismaClient} from  "../src/generated/prisma/index.js";

const app = express()
const prismaClient = new PrismaClient()

app.get('/' ,async (req,res) =>{
   
 const data =   await prismaClient.user.findMany()

    res.json({
        "message":"get endpoint",
        data
    })
})
app.post("/" , async (req,res)=>{

     await prismaClient.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()
        }
    })

    res.json({
        "message":"post endponit "
    })
})
app.listen(3000)