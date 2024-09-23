import express from "express"
import { addFood, listFood, removeFood } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();//create get post and other methods

//image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)//create unique name with time stamp and stored in uploads
    }
})

const upload = multer({storage:storage})
foodRouter.post("/add",upload.single("image"),addFood)//using middleware from multer package to store img
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)





export default foodRouter;