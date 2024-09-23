import mongoose from "mongoose"

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://sadhvihnbhatt:Tanjiro1969@cluster0.t5jjrzj.mongodb.net/food-del').then(()=>console.log("DB connected"));

}