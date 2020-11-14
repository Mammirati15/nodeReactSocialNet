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