const express=require('express');
const mongoose=require('mongoose');
/*
var Cinema=mongoose.model('Cinema',{
    nomCinema:{ type:String },
    longitudeCinema:{ type:Number },
    lattitudeCinema:{ type:Number },
    altitudeCinema:{ type:Number },
    nombreSalles:{type:Number},
    salles:{type:Salle},
    ville:{type:Ville}

})



*/



const CinemaSchema=new mongoose.Schema({
    nomCinema:{ type:String},
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

  const Cinema = mongoose.model("Cinema", CinemaSchema);


const SalleShema=new mongoose.Schema({
    nomSalle:{ type:String },
    nbreplaceSalle:{ type:Number },
})
const Salle = mongoose.model("Salle", SalleShema, "salles");

module.exports= {
    Cinema,
    Salle};
/*


const EmployeeSchema = new mongoose.Schema({
    employeeName: String,
    locations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Location"
      }
    ]
  });
  
  const LocationsSchema = new mongoose.Schema({
    location: String
  });
  
  const Location = mongoose.model("Location", LocationsSchema, "locations");
  
  module.exports = {
    Employee,
    Location
  };*/