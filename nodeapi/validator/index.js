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

exports.userSignupValidator = (req, res, next) => {
  // name is not null and between 4-10 characters
  req.check('name', "Name is required").notEmpty()
  //Email is not null and valid and normalized
  req.check('email', "Email must be between 3 to 35 characterss")
  .matches(/.+\@.+\..+/)
  .withMessage("Email must contain @")
  .isLength({
    min: 4,
    max: 32
  })
  // check for password
  req.check('password', "Password is required").notEmpty();
  req.check('password')
  .isLength({min: 6})
  .withMessage("Password must contain at least 6 characters")
  .matches(/\d/)
  .withMessage("Password must contain a number")
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