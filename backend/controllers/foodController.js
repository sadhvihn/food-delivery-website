// import foodModel from "../models/FoodModel.js";
// import fs from 'fs'

// // add food item

// const addFood= async (req,res)={

//     let image_filename = `${req.file.filename}`,

//     const food = new foodModel({
//         name:req.body.name,
//         description:req.body.description,
//         price:req.body.price,
//         category:req.body.category,
//         image:image_filename
//     })
//     try{
//         await food.save();
//         res.json({success:true,message:"Food added"})
//     }catch (error){
//         console.log(error)
//     }
// }

// export {addFood}
import foodModel from "../models/FoodModel.js";
import fs from 'fs';

// add food item
const addFood = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
    }

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename
    });

    try {
        await food.save();
        res.status(201).json({ success: true, message: "Food added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server error" });
    }
};

//all food list
const listFood = async (req,res)=>{
 try{
    const foods = await foodModel.find({});
    res.json({success:true,data:foods})
 }catch (error){
    console.log(error)
    res.json({success:false,message:"error"})
 }
}

// remove food item
const  removeFood = async (req,res)=>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})//delete img from folder

        await foodModel.findByIdAndDelete(req.body.id);//delete info in mongo
        res.json({success:true,message:"Food Removed"})
    }
    catch (error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
export {addFood,listFood,removeFood};
