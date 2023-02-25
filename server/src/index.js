const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
// const bodyparser = require('body-parser');
// const passport = require('passport')
// const Session = require('express-session')

dotenv.config();
// require('./passport');


const app = express();

const DB = process.env.DATABASE;

app.use(express.json());
app.use(express.urlencoded());


// Cross Origin Resourse Sharing  
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(cors(corsOptions))
// app.use(Session({
//   resave: false,
//   saveUninitialized: true,
//   secret: 'SECRET' 
// }));

// app.use(passport.initialize());
// app.use(passport.session());



app.use(require('../src/api/route/routing'));

// app.get('/auth',passport.authenticate('google',{scope:
//   ['email','profile']}));

// app.get('/auth/callback',
//   passport.authenticate('google',{
//       successRedirect:'/auth/callback/success',
//       failureRedirect:'/auth/callback/failure'

//   })
// );

// app.get('/auth/callback/success',(req,res)=>{
//   if(!req.user) res.redirect('/auth/callback/failure')
//   res.send(`Welcome ${req.user.displayName}`)
// });

// app.get('/auth/callback/failure',(req,res)=>{
//   res.send('Error')
// })

const PORT = process.env.PORT || 8080;

mongoose.connect(DB)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`No connection!`);
    console.log(err.message);
  });

