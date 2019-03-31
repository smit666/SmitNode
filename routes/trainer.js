var express = require('express');
var router = express.Router();
var model=require('../models/index')
var Joi=require('joi');
/* GET home page. */
router.get('/', function(req, res, next) {
   model.trainer.findAll().then(tra=>res.json({
    error:false,
    data:tra,
    msg:'success'
})).catch(eerror=>res.json({
    error:true,
    data:[],
    error:error
}));
  });

  var schema = Joi.object().keys({
    firstName: Joi.string().alphanum().min(2).max(30).required(),
    
    email:Joi.string().email().required().label("Enter valid email"),
    mobile:Joi.required().label("Enter mobile number"),
    departmentId:Joi.number().required().label("Enter department id")
    
  
  });

  router.post('/', function(req, res, next) {
const{
    firstName,
    email,
    mobile,
    departmentId
}=req.body

schema.validate(req.body, {abortEarly: false}) //abortEarly - collect all errors not just the first one
.then(validatedUser => {
    //res.status(200).send(`user ${JSON.stringify(validatedUser)} created`);
    model.trainer.create({firstName,email,mobile,departmentId}).then(tra=>res.status(201).json({
              error:false,
           data:tra,
             msg:'success'
         })).catch(eerror=>res.json({
             error:true,
             data:[],
             error:error
         }));
})
.catch(validationError => {
    const errorMessage = validationError.details.map(d => d.message);
    res.status(400).send(errorMessage);
});


//   Joi.validate(req.body, schema, function(err, value) {
//     if (err) {
//       return catched(err.details); 
//     }
//     else{
//     model.trainer.create({firstName,email,mobile,departmentId}).then(tra=>res.status(201).json({
//      error:false,
//      data:tra,
//      msg:'success'
//  })).catch(eerror=>res.json({
//      error:true,
//      data:[],
//      error:error
//  }));
// }
//   });
   });
  
  module.exports = router;