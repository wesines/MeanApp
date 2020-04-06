const express=require('express');
const mongoose=require('mongoose');

/*
var Salle=mongoose.model('Salle',{
    nomSalle:{ type:String },
    nbreplaceSalle:{ type:Number },
    cinema:{type:Cinema},
   
})

const CinemaSchema= mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nomCinema: { type: String, required: true },
    lattitudeCinema:{ type:Number },
    longitudeCinema:{ type:Number },
    altitudeCinema:{ type:Number },
    salles:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Salle"
        }
    ]
})

  var Cinema = mongoose.model("Cinema", CinemaSchema);
  module.exports = { Cinema}

*/
const SalleShema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nomSalle:{ type:String },
    nbreplaceSalle:{ type:Number },
    places:[
        {
            type:mongoose.Types.ObjectId,
            ref:"Place"
        }
    ]
})
const Salle = mongoose.model("Salle", SalleShema);

module.exports= {Salle};
