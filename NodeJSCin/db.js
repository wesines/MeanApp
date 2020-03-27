const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/CrudCinema',(err)=>{
    if(!err) console.log("Connexion MongoDB réussie");
    else console.log("Erreur connexion MongoDB : " +JSON.stringify(err,undefined,2));
    });
    module.exports=mongoose;