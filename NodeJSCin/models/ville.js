const express=require('express');
const mongoose=require('mongoose');

var Ville=mongoose.model('Ville',{
    nomVille:{ type:String },
    longitudeVille:{ type:Number },
    lattitudeVille:{ type:Number },
    altitudeVille:{ type:Number },
  
})


module.exports= {Ville};

