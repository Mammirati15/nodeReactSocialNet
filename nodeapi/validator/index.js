exports.createPostValidator = (req, res, next) => {
  //Title
  req.check('title', "Write a Title").notEmpty()
  req.check('title', "Title Must Be Between 4 to 150 characters").isLength({
    min: 4,
    max: 150
  })
  //Body
  req.check('body', "Write a Body").notEmpty()
  req.check('body', "Body Must Be Between 4 to 2000 characters").isLength({
    min: 4,
    max: 2000
  })
  //check for errors
  const errors = req.validationErrors()
  //if errors show the first one as the occur
  if(errors){
    const firstError = errors.map((error) => error.msg)[0]
    return res.status(400).json({error: firstError})
  }
  //go to next middleware
  next()
}