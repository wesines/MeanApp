const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

var { Salle } = require ('../models/salle');

router.get('/',(req,res) =>{
    Salle.find(  (err,docs)=>{
        if(!err){res.send(docs);}
        else {console.log('Erreur de reception des données des Salles :'+JSON.stringify,undefined,2)}
    })
})


router.post('/',(req,res)=>
{
  var salle=new Salle({
    nomSalle:req.body.nomSalle,
    nbreplaceSalle:req.body.nbreplaceSalle,

  });
  salle.save((err,doc)=>{
    if(err) console.log(`Erreur d'enregistrement de salle`);
    else {
      console.log("doc="+doc);
      res.send(doc); }
  })
})
module.exports = router;

router.put('/:id',(req,res)=>{
if(!ObjectId.isValid(req.params.id))
return res.status(400).send(`Veuillez vérifier votre ID de salle : ${req.params.id}` );
var salle={
  nomSalle:req.body.nomSalle,
  nbreplaceSalle:req.body.nbreplaceSalle,
  
};
Salle.findByIdAndUpdate(req.params.id,{$set:salle},{new:true},(err,doc)=>{
if(err) {console.log (`Modification salle non effectuée:` + JSON.stringify(err,undefined,2) );}
else{  
     console.log("modification salle effectuée avec succès");
res.send(doc);}
})
})

router.delete('/:id',(req,res)=>{
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send(`Veuillez vérifier votre ID de salle:${req.params.id}` );
  Salle.findByIdAndRemove(req.params.id,(err,doc)=>{
  if(!err)
  {   console.log("suppression Salle effectuée avec succès");
     res.send(doc);}
else {console.log('Erreur de suppression de salle :'+JSON.stringify(err,undefined,2));}
})
})