import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config' 
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//add config
const app=express()
const port=4000

//middleware
app.use(express.json())//data sent from frontend
app.use(cors())//access packet from frontend


//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

//mongodb+srv://sadhvihnbhatt:Tanjiro1969@cluster0.t5jjrzj.mongodb.net/?