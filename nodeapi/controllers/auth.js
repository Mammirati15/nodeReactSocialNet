const jwt = require('jsonwebtoken')
require('dotenv').config()
const expressJwt = require('express-jwt')
const User = require('../models/user')


exports.signUp = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email })
  if(userExists) 
    return res.status(403).json({
      error: "Email already exists"
    })
  const user = await new User(req.body)
  try{
    await user.save()
    res.status(200).json({
      message: "Sign Up Success!  Please Login."
    })
  } catch(e){
    console.log(e)
    res.sendStatus(500)
  }
  
}

exports.signin = (req, res) => {
  //find user based on email
  const {email, password} = req.body
  User.findOne({email}, (err, user) => {
    //if error or no user
    if(err || !user) {
      return res.status(401).json({
        error: "User with that email doesnt exist, please sign up"
      })
    }
    //if user is found make sure that email and password match
    //create authnetication method
    if(!user.authenticate(password)) {
      return res.status(401).json({
        error: "Email and Password Dont Match"
      })
    }
    //generate a token with user id and secret JWT
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
    // put the token in 't' in cookie
    res.cookie("t", token, {expire: new Date() + 9999})

    //return response to front end
    const {_id, name, email} = user
    return res.json({token, user: {_id, email, name}})
  }) 
}

exports.signout = (req, res) => {
  res.clearCookie("t")
  return res.json({message: "Successfully Signed Out"})
}

exports.requireSignin = expressJwt({
  // with a valid token, express jwt adds the verified id
  //in an auth key to the request object
  secret : process.env.JWT_SECRET, 
  userProperty: "auth",
  algorithms: ['HS256']
})