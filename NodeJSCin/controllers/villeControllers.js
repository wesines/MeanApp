const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

var { Ville } = require ('../models/Ville');

router.get('/',(req,res) =>{
    Ville.find(  (err,docs)=>{
        if(!err){res.send(docs);}
        else {console.log('Erreur de reception des données des Villes :'+JSON.stringify,undefined,2)}
    })
})


router.post('/',(req,res)=>
{
  var ville=new Ville({
    nomVille:req.body.nomVille,
    longitudeVille:req.body.longitudeVille,
    lattitudeVille:req.body.lattitudeVille,
    altitudeVille:req.body.altitudeVille,
  });
  ville.save((err,doc)=>{
    if(err) console.log(`Erreur d'enregistrement de ville`);
    else {
      console.log("doc="+doc);
      res.send(doc); }
  })
})
module.exports = router;
