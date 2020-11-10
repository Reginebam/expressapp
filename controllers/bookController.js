const { model } = require('mongoose')
const Book = require('../models/bookModel')
const book = require('../models/bookModel')

const bookCtrl = {}


//create = post
bookCtrl.addBook = async (req, res) => {
 const { author, title, sunmmary, publisher, pages, ISBN } = req.body

 try{

let book = await Book.create ({author, title, summary, publisher, pages, ISBN})
        res.status(200).json({ book })
        res.status(201 ).json({ book })

 }catch (err) {
     res.status(400).send(err)
 }
}



//read= get

//update  = put


//delete =delete



module.exports = bookCtrl






model.exports = bookCtrl;