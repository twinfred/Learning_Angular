const mongoose = require('mongoose');
const Author = require('./../models/author');

module.exports = {
    getAuthors:
        (req, res) => {
            Author.find({}, (err, authors) => {
                if(err){
                    res.json({message: "Error", error: err});
                }else{
                    res.json({message: "Success", data: authors});
                }
            }).sort({ createdAt: -1 })
        },
    getOneAuthor:
        (req, res) => {
            Author.findOne({_id: req.params.id}, (err, author) => {
                if(!author){
                    res.json({message: "Error", error: "This author isn't in our database."});
                }else if(err){
                    res.json({message: "Error", error: err});
                }else{
                    res.json({message: "Success", data: author});
                }
            })
        },
    addAuthor:
        (req, res) => {
            Author.create({name: req.body.name}, (err, newAuthor) => {
                if(err){
                    res.json({message: "Error", error: err});
                }else{
                    res.json({message: "Success", data: newAuthor});
                }
            })
        },
    editAuthor:
        (req, res)=>{
            Author.findOne({_id: req.params.id}, (err, author)=>{
                if(!author){
                    res.json({message: "Error.", error: "This author isn't in our database"});
                }else{
                    Author.update(author, {name: req.body.name}, (err, updatedAuthor)=>{
                        if(err){
                            res.json({message: "Error.", error: err})
                        }else{
                            res.json({message: "Success.", data: updatedAuthor});
                        }
                    })
                }
            })
        },
    deleteAuthor:
        (req, res)=>{
            Author.findOne({_id: req.params.id}, (err, author)=>{
                if(!author){
                    res.json({message: "Error.", error: "This author isn't in our database"});
                }else{
                    Author.remove(author, (err)=>{
                        res.json({message: "Success."});
                    })
                }
            })
        },
}