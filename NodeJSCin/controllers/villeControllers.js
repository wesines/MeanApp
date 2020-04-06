const express=require('express');
var router=express.Router();
var ObjectId=require('mongoose').Types.ObjectId;
const mongoose=require('mongoose');

var { Ville } = require ('../models/Ville');
console.log("hello VilleContoller")

router.get('/',(req,res) =>{
    Ville.find()
    .then(docs=>{
        res.send(docs);
    })
     .catch(err=>{console.log('Erreur de reception des données des Villes :'+JSON.stringify,undefined,2)
    })
})


router.get('/:nomVille',(req,res) =>{
 // if(!isValid(req.params.nomVille))
//  return res.status(400).send(`Veuillez vérifier votre nom de ville passé en parametre${req.params.nomVille}` );

  nomV=req.params.nomVille;
  console.log("nomV = "+nomV)
    Ville.find().where('nomVille').equals(nomV)
  // Ville.find().where('nomVille').equals(nomV)
  .select("cinemas nomCinema ")
  .populate('cinemas','nomCinema')
  .exec()
 .then(docs => {
   console.log("docs = "+docs)
    res.send(docs);
  /*   res.status(200).json({
        count: docs.length,
        villes: docs.map(doc => {
          return {
            cinemas: doc.cinemas,
           
          }
        })
      })*/
    })
  .catch(err => {
    res.send.status(500).json({
      error: err
    });
  })
})


router.post('/',(req,res,next)=>{
     ville=new Ville({
    _id:new mongoose.Types.ObjectId(),
      nomVille:req.body.nomVille,
      longitudeVille:req.body.longitudeVille,
      lattitudeVille:req.body.lattitudeVille,
      altitudeVille:req.body.altitudeVille,
      cinemas:req.body.cinemas
       });
     //  console.log("ville ajoutée est ="+ville);
    ville
    .save()
    .then(doc=>{
       res.status(201).json({
                              message: "Ville POST request to /villes",
                              createdVille:ville
                            });
          })
     .catch(err=>{ 
       console.log(`Erreur d'enregistrement de ville`+err)
       res.status(500).json({
                              error:err
                           });
             })
            });

module.exports = router;
/*select("product quantity _id")
    .populate('product', 'name')
    .exec()
    .then(docs => {
      res.status(200).json({
        count: docs.length,
        orders: docs.map(doc => {
          return {
            _id: doc._id,
            product: doc.product,
            quantity: doc.quantity,
            request: {
              type: "GET",
              url: "http://localhost:3000/orders/" + doc._id
            }
          };
        })
      });
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});*/