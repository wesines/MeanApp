const express=require('express');
const mongoose=require('mongoose');


const VilleSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nomVille: { type: String, required: true },
      lattitudeVille:{ type:Number },
      longitudeVille:{ type:Number },
      altitudeVille:{ type:Number },
      cinemas:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Cinema"
        }
    ]
  })
  
    var Ville = mongoose.model("Ville", VilleSchema);
    module.exports = { Ville}