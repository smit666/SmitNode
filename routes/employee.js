var express = require('express');
var router = express.Router();
var model=require('../models/index')

router.get('/Get',function(req,res,next){
model.employee.findAll({
   // attributes: [],
    include: [
      {
        model: model.department,
        attributes:
            [['name','Name'],['description','Description']]
        
      
      }
    //   ,
    //   {
    //     model: models.User,
    //     attributes: [['firstName','First Name'], ['lastName','Last Name']],
    //   }
    //ttributes: { exclude: ['id'] }
    ]
}).then(emp => res.json({
    error: false,
    data: emp,
    msg:'Successful'
}))
.catch(error => res.json({
    error: true,
    data: [],
    error: error
}));
});

router.post('/Insert',function(req,res,next){
const{firstName,
lastName,
departmentId
}=req.body;

    model.employee.create({firstName,lastName,departmentId}).then(emp => res.status(201).json({
        error: false,
        data: emp,
        msg:'Successful'
    }))
    .catch(error => res.json({
        error: true,
        data: [],
        error: error
    }));
    })

module.exports=router;