const express=require('express');
const mongoose=require('mongoose');

var Place=mongoose.model('Place',{
    nomPlace:{ type:String },
    longitudePlace:{ type:Number },
    lattitudePlace:{ type:Number },
    altitudePlace:{ type:Number },

})


module.exports= {Place};