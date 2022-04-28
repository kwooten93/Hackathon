const express = require('express');
const itemRouter = express.Router();
const asyncHandler = require('express-async-handler')
const Item = require('../model/itemModel')

const itemId = Item.id;
//these handle the routes for get, post, put, delete and they are used with the itemCOntroller file to simplify the files
itemRouter.route('/')
.get(asyncHandler(async(req, res) =>{
    //we are wanting to get the items from the database and find them to display
    const items = await Item.find()

    res.status(200).json(items)
}))

.post(asyncHandler(async (req, res) =>{
    
    if(!req.body.name) {
        res.status(400).json({message: "Please fill out information" })
    }
try{
    const item = await Item.create(
        req.body
    )

    res.status(200).json(item)
} catch(err){
    res.status(400).json({message: err.message})
}
}))

itemRouter.put('/:id', asyncHandler(async(req, res) =>{
    Item.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true })
    .then(item => {
        res.status(200).json(item)
    })
    .catch(err => next(err));
}))

itemRouter.delete('/:id', asyncHandler(async(req, res) =>{
    Item.findByIdAndDelete(req.params.id)
    .then(response =>{
        res.status(200).json(response)
    })
    .catch(err => next(err));
    
}))


module.exports = itemRouter;