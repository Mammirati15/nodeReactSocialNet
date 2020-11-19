const User = require('../models/user')

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if(err || !user) {
      return res.status(400).json({
        error: "User not Found"
      })
    }
    req.profile = user // adds the user info in a profile object into the request
    next()
  })

  exports.hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id
    if(!authorized) {
      return res.status(403).json({
        error: "User is not authorized to perform this action"
      })
    }
  }
}