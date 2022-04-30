const express = require('express');
const itemRouter = express.Router();
const asyncHandler = require('express-async-handler')
//calling from schema created
const Item = require('../model/itemModel')

//these handle the routes for get, post, put, delete and they are used with the itemController file to simplify the files
itemRouter.route('/')
.get(asyncHandler(async(req, res) =>{
    //we are wanting to get the items from the database and find them to display
    const items = await Item.find()

    res.status(200).json(items)
}))

.post(asyncHandler(async (req, res, next) =>{
    if(!req.body) {
        res.status(400).json({message: "Please fill out information" })
    }
    Item.create(
        req.body
    )
    .then(item =>{
    res.status(200).json(item)}
)
.catch(err => next(err));
}))

itemRouter.put('/:id', asyncHandler(async(req, res, next) =>{
    Item.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, { new: true })
    .then(item => {
        res.status(200).json(item)
    })
    .catch(err => next(err));
}))

itemRouter.delete('/:id', asyncHandler(async(req, res, next) =>{
    Item.findByIdAndDelete(req.params.id)
    .then(response =>{
        res.status(200).json(response)
    })
    .catch(err => next(err));
    
}))


module.exports = itemRouter;