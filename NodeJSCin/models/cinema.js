const express=require('express');
const mongoose=require('mongoose');



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
