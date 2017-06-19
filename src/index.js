import express from 'express';
import config from 'config';
import graphqlHTTP from 'express-graphql';
import schema from './schema';
import postCtrl from './controllers/post.controller';

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