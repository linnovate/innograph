const express = require('express');
const config = require('config');
const graphqlHTTP = require('express-graphql');

import testSchema from './schema';
import {graphql} from 'graphql';

var activeSchemas = config.get('activeSchemas');

var query = '{ profiles {id firstName} }';
graphql(testSchema, query).then(result => {
  console.log(JSON.stringify(result));
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: testSchema,
  graphiql: true
}));
console.log('App plistening at 1111');
app.listen(1111);
