const mongoose = require('mongoose');
const Cake = require('./../models/cake');

module.exports = {
    getCakes:
        (req, res) => {
            Cake.find({}, (err, cakes) => {
                if(!cakes){
                    res.json({message: "Error", error: "No cakes in our database."});
                }else if(err){
                    res.json({message: "Error", error: err});
                }else{
                    res.json({message: "Success", data: cakes});
                }
            }).sort({ createdAt: -1 })
        },
    getOneCake:
        (req, res) => {
            Cake.findOne({_id: req.params.id}, (err, cake) => {
                if(!cake){
                    res.json({message: "Error", error: "This cake isn't in our database."});
                }else if(err){
                    res.json({message: "Error", error: err});
                }else{
                    res.json({message: "Success", data: cake});
                }
            })
        },
    addCake:
        (req, res) => {
            Cake.create({baker: req.body.baker, image: req.body.image}, (err, newCake) => {
                if(err){
                    res.json({message: "Error", error: err});
                }else{
                    res.json({message: "Success", data: newCake});
                }
            })
        },
    addReview:
        (req, res) => {
            console.log("Request:", req.body)
            Cake.findOne({_id: req.params.id}, (err, cake) => {
                console.log("cake:", cake)
                if(!cake){
                    res.json({message: "Error", error: "This cake isn't in our database."});
                }else if(err){
                    res.json({message: "Error", error: err});
                }else{
                    Cake.update(cake, {$push: {ratings: req.body}}, (err, updatedCake) => {
                        if(err){
                            res.json({message: "Error", error: err});
                        }else{
                            res.json({message: "Success", data: updatedCake});
                            console.log("cake:", updatedCake)
                        }
                    })
                }
            })
        }
}