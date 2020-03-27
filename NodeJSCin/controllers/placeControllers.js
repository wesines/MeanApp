const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

var { Place } = require ('../models/Place');

router.get('/',(req,res) =>{
    Place.find(  (err,docs)=>{
        if(!err){res.send(docs);}
        else {console.log('Erreur de reception des données des Places :'+JSON.stringify,undefined,2)}
    })
})


router.post('/',(req,res)=>
{
  var place=new Place({
    nomPlace:req.body.nomPlace,
    longitudePlace:req.body.longitudePlace,
    lattitudePlace:req.body.lattitudePlace,
    altitudePlace:req.body.altitudePlace,

  });
  place.save((err,doc)=>{
    if(err) console.log(`Erreur d'enregistrement de Place`);
    else {
      console.log("doc="+doc);
      res.send(doc); }
  })
})
module.exports = router;

router.put('/:id',(req,res)=>{
if(!ObjectId.isValid(req.params.id))
return res.status(400).send(`Veuillez vérifier votre ID de Place : ${req.params.id}` );
var place={
    nomPlace:req.body.nomPlace,
    longitudePlace:req.body.longitudePlace,
    lattitudePlace:req.body.lattitudePlace,
    altitudePlace:req.body.altitudePlace,
  
};
Place.findByIdAndUpdate(req.params.id,{$set:place},{new:true},(err,doc)=>{
if(err) {console.log (`Modification place non effectuée:` + JSON.stringify(err,undefined,2) );}
else{  
     console.log("modification place effectuée avec succès");
res.send(doc);}
})
})

router.delete('/:id',(req,res)=>{
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send(`Veuillez vérifier votre ID de place:${req.params.id}` );
  Place.findByIdAndRemove(req.params.id,(err,doc)=>{
  if(!err)
  {   console.log("suppression place effectuée avec succès");
     res.send(doc);}
else {console.log('Erreur de suppression de place :'+JSON.stringify(err,undefined,2));}
})
})