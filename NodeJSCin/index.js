const express=require('express');
const {mongoose} =require('./db.js');
const bodyParser= require('body-parser');
var router=express.Router();
var app= express();
const cors=require('cors');
app.use(bodyParser.json());
var cinemaController= require('./controllers/cinemaControllers.js');
var villeController= require('./controllers/villeControllers.js');
var salleController= require('./controllers/salleControllers.js');

app.use(cors({origin:'http://localhost:4200'}));

app.get('/', (req, res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
  'Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept'
  );  
  res.send('success') ;
})
  const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header');
   app.use(expressCspHeader({
      directives: {
          'default-src': [INLINE],
          'script-src': [SELF, INLINE, 'somehost.com'],
          'style-src': [SELF, 'mystyles.net'],
          'img-src': ['data:', 'images.com'],
          'worker-src': [NONE],
          'block-all-mixed-content': true
      }  }));



app.listen(3000,() => console.log('server started at port : 3000'));

app.use('/villes', villeController);
app.use('/cinemas', cinemaController);

app.use('/salles', salleController);

