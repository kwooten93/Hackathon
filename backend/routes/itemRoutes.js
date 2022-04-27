const express = require('express');
const itemRouter = express.Router();
const { getItem, postItem, putItem, deleteItem } = require('../controllers/itemController');
//these handle the routes for get, post, put, delete and they are used with the itemCOntroller file to simplify the files
itemRouter.get('/', getItem)

itemRouter.post('/', postItem)

itemRouter.put('/:id', putItem)

itemRouter.delete('/:id', deleteItem)


module.exports = itemRouter;