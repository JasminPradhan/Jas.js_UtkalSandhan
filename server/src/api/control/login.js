const bcrypt = require('bcrypt');
const Userdb = require('../model/userschema');
    

// exports.signup = async (req,res) => {

//   const {name,location,email,phoneno,password} = req.body;
  
//   if(!req.body){
//      return res.status(400).send({message: "Field Required!"});
//   }
  
//   Userdb.findOne({email}, async(err,user) =>{
//       if(user){
//           res.send({message: "User already registered!"})
//       }
//       else{
//           const user = new Userdb({name,location,email,phoneno,password});
//           const salt = await bcrypt.genSalt(10);
//           user.password = await bcrypt.hash(user.password, salt);

//           user.save(user)
//           .then(data =>{
//               res.sendStatus(200);
//               res.status(200).json({message : "Registered Successfully!"});
//           })
          
//           .catch(err =>{
//               res.status(400).send({message: err.message});
//           })
//       }
//   })
  
//   }


//   exports.login = async (req, res) => {
//     const user = await Userdb.findOne({ email});
//     if (user) {
//       const validPassword = await bcrypt.compare(res.body.password, user.password);
//       if (validPassword) {
//         res.status(200).json({ message: "Login Successful" });
//       } else {
//         res.status(400).json({ error: "Invalid Password" });
//       }
//     } else {
//       res.status(401).json({ error: "User not registered" });
//     }
// }


exports.signup = (req,res) => {

  const {name,location,email,phoneno,password} = req.body;
  
  if(!req.body){
     return res.status(400).send({message: "Field Required!"});
  }
  
  Userdb.findOne({email}, (err,user) =>{
      if(user){
          res.send({message: "User already registered!"})
      }
      else{
          const user = new Userdb({name,location,email,phoneno,password})
  
          user.save(user)
          .then(data =>{
              res.json({message : "Registered Successfully!"});
          })
          
          .catch(err =>{
              res.status(400).send({message: err.message});
          })
      }
  })
  
  }
  
  
  exports.login = (req,res) => {
  
      const {email, password} = req.body;
      
      if(!req.body){
         return res.status(400).send({message: "Field Required!"});
      }
      
      Userdb.findOne({email}, (err,user) =>{
          if(user){
              if(password === user.password) {
                  res.send({message: "Login Successful"}, user)
              }
              else {
                  res.send({message: "Incorrect Password"})
              }
          }
          else{
              res.send({message: "User not registered!"})
          }
      })
      }