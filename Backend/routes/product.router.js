const express = require("express")
const {ProductModel}=require("../model/product.model")

const productRouter = express.Router()

productRouter.post("/add",async(req,res)=>{
    console.log(req.body)
    try {
      const product = new ProductModel(req.body)
      await product.save()
      res.status(200).send({"msg":"A new Product is added!"})
    } catch (error) {
      res.status(400).send({"msg":error.message})
    }
  
  })




module.exports={
    productRouter
}