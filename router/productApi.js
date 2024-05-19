const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const auth = require("../middleware/auth");
const multer = require('multer');
const fs = require("fs");
const axios = require('axios');
var ObjectID = require('mongodb').ObjectID;
const router = express.Router()
const jsonParser = bodyParser.json();
const ProductSchema = require('../models/product/products')

router.post('/fetch-product',jsonParser,async (req,res)=>{
  var productId = req.body.productId?req.body.productId:''
  if(productId==="new") productId=""
  try{
      if(!productId){
          res.status(400).json({error:"کد محصول پیدا نشد"})
          return
      } 
      var productData = await ProductSchema.findOne({url: productId})
      if(!productData)
        productData = await ProductSchema.findOne({_id: ObjectID(productId)})
      
     res.json({filter:productData,})
  }
  catch(error){
      res.status(500).json({error: error.message})
  } 
})
router.post('/list-product',jsonParser,async (req,res)=>{
  var pageSize = req.body.pageSize?req.body.pageSize:"10";
  var offset = req.body.offset?(parseInt(req.body.offset)):0;
  try{const data={
      category:req.body.category,
      title:req.body.title,
      brand:req.body.brand,
      offset:req.body.offset,
      pageSize:pageSize
  }
      const productList = await ProductSchema.aggregate([
          { $match:data.title?{title:new RegExp('.*' + data.title + '.*')}:{}},
          { $match:data.category?{category:data.category}:{}},
          { $match:data.brand?{brand:data.brand}:{}},
          ])
          const products = productList.slice(offset,
              (parseInt(offset)+parseInt(pageSize))) 
          
          res.json({filter:products,
              size:productList.length})
  }
  catch(error){
      res.status(500).json({error: error.message})
  } 
})
router.post('/update-product',jsonParser,async(req,res)=>{
  var productId= req.body.productId?req.body.productId:''
  if(productId === "new")productId=''
  try{ 
      const data = req.body
      var productResult = ''
      if(productId) productResult=await ProductSchema.updateOne({_id:productId},
          {$set:data})
      else
      productResult= await ProductSchema.create(data)
      
      res.json({result:productResult,success:productId?"Updated":"Created"})
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})

router.post('/delete-product',jsonParser,auth,async (req,res)=>{
  var productId = req.body.productId?req.body.productId:''
  try{
      if(!productId){
          res.status(400).json({message:"محصول موجود نیست"})
          return
      }
      const productData = await ProductSchema.deleteOne({_id: ObjectID(productId)})
     res.json({message:"محصول حذف شد",data:productData,success:true})
  }
  catch(error){
      res.status(500).json({error: error.message})
  } 
})

var storage = multer.diskStorage(
    {
        destination: '/dataset/',
        filename: function ( req, file, cb ) {
            cb( null, "Deep"+ '-' + Date.now()+ '-'+file.originalname);
        }
    }
  );
  const uploadImg = multer({ storage: storage ,
    limits: { fileSize: "5mb" }})

    router.post('/upload',uploadImg.single('upload'), async(req, res, next)=>{
        const folderName = req.body.folderName?req.body.folderName:"temp"
        try{
        // to declare some path to store your converted image
        var matches = req.body.base64image.match(/^data:([A-Za-z-+/]+);base64,(.+)$/),
        response = {};
        if (matches.length !== 3) {
        return new Error('Invalid input string');
        }
        response.type = matches[1];
        response.data = new Buffer.from(matches[2], 'base64');
        let decodedImg = response;
        let imageBuffer = decodedImg.data;
        //let type = decodedImg.type;
        //let extension = mime.extension(type);
        let fileName = `MGM-${Date.now().toString()+"-"+req.body.imgName}`;
       var upUrl = `/upload/${folderName}/${fileName}`
        fs.writeFileSync("."+upUrl, imageBuffer, 'utf8');
        return res.send({"status":"success",url:upUrl});
        } catch (e) {
            res.send({"status":"failed",error:e});
        }
    })

module.exports = router;