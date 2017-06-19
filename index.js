const express = require('express');
const config = require('config');
const graphqlHTTP = require('express-graphql');

// import testSchema from './schema';
import schema from './schema';
import postCtrl from './controllers/post.controller';
import {graphql} from 'graphql';

//var activeSchemas = config.get('activeSchemas');

// var query = '{ profiles {id firstName} }';
// graphql(testSchema, query).then(result => {
//   console.log(JSON.stringify(result));
// });

const app = express();
// app.use('/graphql', graphqlHTTP({
//   schema: testSchema,
//   graphiql: true
// }));
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


