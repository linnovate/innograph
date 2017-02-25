const express = require('express');
const config = require('config');
const graphqlHTTP = require('express-graphql');

import testSchema from './schema';
import {graphql} from 'graphql';

var activeSchemas = config.get('activeSchemas');

var query = '{ profile {name} }';
graphql(testSchema, query).then(result => {

  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result);
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: testSchema,
  graphiql: true
}));
console.log('App plistening at 1111');
app.listen(1111);
