const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;
const mongoose=require('mongoose');
var { Cinema } = require ('../models/cinema');

var { Salle } = require ('../models/salle');





router.get('/',(req,res,next)=>{
  Cinema.find()
  .select("nomCinema longitudeCinema lattitudeCinema altitudeCinema salles")
  .populate('salles', 'nomSalle')
  .exec()
  .then(docs=>{
    res.status(200).json({
      count:docs.length,
      cinemas:docs.map(doc=>{
        return{
          NOM:doc.nomCinema,
          longitudeCinema:doc.longitudeCinema,
          lattitudeCinema:doc.lattitudeCinema,
          altitudeCinema:doc.altitudeCinema,
          Liste_des_salles:doc.salles
        }
      })
    })
  })
  .catch(err=>{ 
    console.log(`Erreur d'affichage de cinéma`+err)
    res.status(500).json({
                           error:err
                        });
          })
})

router.get('/:id',(req,res) =>{
  if(!ObjectId.isValid(req.params.id))
return res.status(400).send(`Veuillez vérifier votre ID cinéma${req.params.id}` );
  Cinema.findById(req.params.id,function (err,docs)  {
    if(!err){ res.send(docs); }
    else { console.log('Erreur de reception des données des Cinemas :'+JSON.stringify,undefined,2)}
      })

})



router.post('/',(req,res,next)=>{
  const cinema=new Cinema({
  _id:new mongoose.Types.ObjectId(),
    nomCinema:req.body.nomCinema,
    longitudeCinema:req.body.longitudeCinema,
    lattitudeCinema:req.body.lattitudeCinema,
    altitudeCinema:req.body.altitudeCinema,
    salles:req.body.salles
     });
  cinema
  .save()
  .then(doc=>{
     res.status(201).json({
                            message: "cinema POST request to /cinemas",
                            createdCinema:cinema
                          });
        })
   .catch(err=>{ 
     console.log(`Erreur d'enregistrement de cinéma`+err)
     res.status(500).json({
                            error:err
                         });
           })
          });


          
router.put('/:id',(req,res)=>{
if(!ObjectId.isValid(req.params.id))
return res.status(400).send(`Veuillez vérifier votre ID cinéma${req.params.id}` );
var cinema={
  nomCinema:req.body.nomCinema,
  longitudeCinema:req.body.longitudeCinema,
  lattitudeCinema:req.body.lattitudeCinema,
  altitudeCinema:req.body.altitudeCinema,
  salles:req.body.salles,
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
 module.exports = router;


