
//using async to to deal with the promise that returns from the database because I am using mongoose. So I am using the express-async-handler to deal with this
const asyncHandler = require('express-async-handler')

//this will show the items GET
//has to be authenticated to show
const getItem = asyncHandler(async(req, res) =>{
    res.status(200).json({message: "Items"})
})
//this will create a new item POST
//has to be authenticated to do so
const postItem = asyncHandler(async(req, res) =>{
    if(!req.body.text) {
        res.status(400).json({message: "Please fill out information" })
    }

    res.status(200).json({message: "Create Item"})
})
//this will edit an existing item PUT
//has to be authenticated to do so
const putItem = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Edit item ${req.params.id}`})
})

//this will delete a selected item DELETE
//has to be authenticated to do so
const deleteItem = asyncHandler(async(req, res) =>{
    res.status(200).json({message: `Delete item ${req.params.id}`})
})

module.exports = {
    getItem,
    postItem,
    putItem,
    deleteItem

}
