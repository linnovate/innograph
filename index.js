const express = require('express');
const config = require('config');
const graphqlHTTP = require('express-graphql');

// import testSchema from './schema';
const schema = require ('./schema');
const postCtrl = require ('./controllers/post.controller');
const {graphql} = require ('graphql');

//var activeSchemas = config.get('activeSchemas');

// var query = '{ profiles {id firstName} }';
// graphql(testSchema, query).then(result => {
//   console.log(JSON.stringify(result));
// });
function init() {
  const app = express();
  app.use('/graphql', (req, res) => {
    const ctrl = {
      post: {
        load: postCtrl.load,
        list: postCtrl.list,
        create: postCtrl.create,
        remove: postCtrl.remove,
        update: postCtrl.update
      }
    };
    graphqlHTTP({
      schema,
      graphiql: true,
      context: { ctrl }
    })(req, res);
  });
  console.log('App plistening at 1111');
  app.listen(1111);

}


module.exports = init;


