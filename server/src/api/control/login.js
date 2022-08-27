const bcrypt = require('bcrypt');
const Userdb = require('../model/userschema');
    

exports.signup = (req,res) => {

  const {name, email, password} = req.body;
  
  if(!req.body){
     return res.status(400).send({message: "Field Required!"});
  }
  
  Userdb.findOne({email}, (err,user) =>{
      if(user){
          res.send({message: "User already registered!"})
      }
      else{
          const user = new Userdb({name,email,password})
  
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


// exports.signup = async (req, res) => {
//     const body = req.body;

//     if (!body) {
//       return res.status(400).send({ message: "Field Required" });
//     }

//     const user = new Userdb(body);
//     const salt = await bcrypt.genSalt(10);
//     user.password = await bcrypt.hash(user.password, salt);
//     user.save(user)
//     .then((data) => {
//         res.sendStatus(200);
//         res.status(200).json({message: "Registered Successfully"});
// })
//     .catch(err =>{
//         res.status(400).send({message: err.message});
//   })
// }


  exports.login = async (req, res) => {
    const body = req.body;
    const user = await Userdb.findOne({ email: body.email });
    if (user) {
      const validPassword = await bcrypt.compare(body.password, user.password);
      if (validPassword) {
        res.status(200).json({ message: "Login Successful" });
      } else {
        res.status(400).json({ error: "Invalid Password" });
      }
    } else {
      res.status(401).json({ error: "User not registered" });
    }
}