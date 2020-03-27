const express=require('express');
const mongoose=require('mongoose');

/*
var Salle=mongoose.model('Salle',{
    nomSalle:{ type:String },
    nbreplaceSalle:{ type:Number },
    cinema:{type:Cinema},
   
})
*/
const SalleShema=new mongoose.Schema({
    nomSalle:{ type:String },
    nbreplaceSalle:{ type:Number },
})
const Salle = mongoose.model("Salle", SalleShema, "salles");

module.exports= {Salle};
