var express=require('express');
var router=express.Router();
var model=require('../models/index');

router.get('/',function(req,res,next){
model.department.findAll({
  
    include: [
        {
          model: model.employee,as: "employee"
        }]


})
.then(departments => {
    // const resObj = departments.map(department => {

    //   //tidy up the user data
    //   return Object.assign(
    //     {},
    //     {
    //       name: department.name,
    //       description: department.description,
          
    //       employeess: department.employee.map(emp => {

    //         //tidy up the post data
    //         return Object.assign(
    //           {},
    //           {
    //             id: emp.id,
    //             firstName: emp.firstName,
    //             lastName: emp.lastName
    //           }
    //           )
    //       })
    //     }
    //   )
    // })
    res.json({
        error: false,
        data: departments,
        msg:'Successful'
    })
  })

// .then(dep=>res.json({
//     error: false,
//     data: dep,
//     msg:'Successful'
// }))
// .then(function(dep) {
//    // dep = dep.get(); //turns sequelize object into json
//     //d('num users found: ' + users.length);
//     res.json({
//         error: false,
//         data: dep,
//         msg:'Successful'

//     });
// })
.catch(error => res.json({
    error: true,
    data: [],
    error: error
}));
});

router.post('/',function(req,res,next){
const{name,description}=req.body;

    model.department.create({name,description}).then(dep=>res.json({
        error:false,
        data:dep,
        msg:'success'
    })).catch(eerror=>res.json({
        error:true,
        data:[],
        error:error
    }));
});

router.put('/:id',function(req,res,next){
    const dep_id=req.params.id;
    const{name,description}=req.body;

    model.department.update({name,description},{where:{id:dep_id}}).then(dep=>res.json({
        error:false,
        data:dep,
        msg:'updated'
    })).catch(error=>res.json({
        error:true,
        data:[],
        msg:'error'
    }));

});

router.get('/:id',function(req,res,next){
    const dep_id=req.params.id;

    model.department.findAll({where:{id:dep_id}})
    .then(function(dep) {
        if(dep.length>0)
        res.json({

              error:false,
             data:dep
        });
        else
        res.json({

            error:true,
           data:dep,
           msg:'No record found'
      });
    })
    // .then(dep=>res.json({

    //     error:false,
    //     data:dep

    // }))
    .catch(error=>res.json({
        error:true,
        data:[],
        msg:'error'
    }));

});


router.delete('/:id',function(req,res,next){
    const dep_id=req.params.id;
    model.department.destroy({where:{id:dep_id}}).then(dep=>res.json({
        error:false,
        data:dep,
        msg:'Deleted'
    })).catch(dep=>res.json({
        error:true,
        data:dep
    }))
})
module.exports=router;