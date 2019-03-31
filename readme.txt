
npm install -g sequelize-cli express-generator
express --view=pug todos-manager

$ cd todos-manager && npm install
$ npm install --save sequelize
$ npm install --save mysql2

$ sequelize init 
$ sequelize model:create --name Todo --attributes title:string,description:string
$ sequelize db:migrate

https://arjunphp.com/build-restful-api-using-node-express-sequelize/

https://scotch.io/tutorials/node-api-schema-validation-with-joi/

---Unit test--

npm install mocha chai --save-dev
mkdir test
touch test/test-pages.js
npm install request --save-dev
https://buddy.works/guides/how-automate-nodejs-unit-tests-with-mocha-chai

--Swagger--
npm i swagger-ui-express --save
var swaggerUi = require('swagger-ui-express'),
 
   swaggerDocument = require('./swagger.json');


app.use('/api-docs', swaggerUi.serve,
 swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);

https://blog.cloudboost.io/adding-swagger-to-existing-node-js-project-92a6624b855b

https://codehandbook.org/implement-has-many-association-in-sequelize/

https://stackoverflow.com/questions/24431213/get-only-values-from-rows-and-associations-with-sequelize

https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/