const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;

var { Cinema } = require ('../models/cinema');


router.get('/',(req,res) =>{
        Cinema.find(  (err,docs)=>{
        if(!err){res.send(docs);}
        else {console.log('Erreur de reception des données des Cinemas :'+JSON.stringify,undefined,2)}
    })
 
})

/*
router.get('/',(req,res,next) =>{
  Cinema.find( )
  .select("nomCinema _id salles")
  .exec()
  .then((err,docs)=>{
        if(!err){res.send(docs);}
        else {console.log('Erreur de reception des données des Cinemas :'+JSON.stringify,undefined,2)}
    })
  })*/
router.post('/',(req,res)=>
{console.log("post request");
  var cinema=new Cinema({
    nomCinema:req.body.name,
    longitudeCinema:req.body.longitudeCinema,
    lattitudeCinema:req.body.lattitudeCinema,
    altitudeCinema:req.body.altitudeCinema,
    salles:req.body.salles,
  });
  cinema.save((err,doc)=>{
    if(err) console.log(`Erreur d'enregistrement de cinéma`);
    else {
      console.log("doc="+doc);
      res.send(doc); }
  })
})
module.exports = router;



router.put('/:id',(req,res)=>{
if(!ObjectId.isValid(req.params.id))
return res.status(400).send(`Veuillez vérifier votre ID cinéma${req.params.id}` );
var cinema={
  nomCinema:req.body.nomCinema,
  longitudeCinema:req.body.longitudeCinema,
  lattitudeCinema:req.body.lattitudeCinema,
  altitudeCinema:req.body.altitudeCinema,
};
Cinema.findByIdAndUpdate(req.params.id,{$set:cinema},{new:true},(err,doc)=>{
if(err) {console.log (`Modification non effectuée:` + JSON.stringify(err,undefined,2) );}
else{  
     console.log("modification effectuée avec succès");
res.send(doc);}
})
})

router.delete('/:id',(req,res)=>{
  if(!ObjectId.isValid(req.params.id))
  return res.status(400).send(`Veuillez vérifier votre ID cinéma${req.params.id}` );
Cinema.findByIdAndRemove(req.params.id,(err,doc)=>{
  if(!err)
  {   console.log("suppression effectuée avec succès");
     res.send(doc);}
else {console.log('Error in Employee delte:'+JSON.stringify(err,undefined,2));}
})
})



