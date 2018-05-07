import express from 'express';
import graphqlHTTP from 'express-graphql';
import jwt from 'express-jwt';
import schema from './schema';
import defaultCtrl from './controllers';

function init(path, _app, _ctrl, auth) {
  const app = _app || express();
  const ctrl = {
    post: {
      load: (_ctrl && _ctrl.post) ? _ctrl.post.load : defaultCtrl.post.load,
      list: (_ctrl && _ctrl.post) ? _ctrl.post.list : defaultCtrl.post.list,
      create: (_ctrl && _ctrl.post) ? _ctrl.post.create : defaultCtrl.post.create,
      remove: (_ctrl && _ctrl.post) ? _ctrl.post.remove : defaultCtrl.post.remove,
      update: (_ctrl && _ctrl.post) ? _ctrl.post.update : defaultCtrl.post.update
    },
    profile: {
      load: (_ctrl && _ctrl.profile) ? _ctrl.profile.load : defaultCtrl.profile.load,
    },
    user: {
      create: (_ctrl && _ctrl.user) ? _ctrl.user.create : defaultCtrl.user.create,
    },
    auth: {
      verify: (_ctrl && _ctrl.auth) ? _ctrl.auth.verifyToken : defaultCtrl.auth.verifyToken,
    }
  };
  path = path || '/graphql';
  
  app.use(path, jwt({
    secret: process.env.JWT_SECRET,
    credentialsRequired: false,
  }));
  
  app.use(path, function(req, res, next) {
    const opname = req.body.operationName;
    if (['register', 'login'].indexOf(opname) > -1) return next();
    _ctrl.auth.verifyToken(req.headers.authorization).then((user) => {
      req.user = user;
      next();
    });
  });
  
  app.use(path, (req, res, next) => {
    return next();
  }, (req, res, next) => {
    graphqlHTTP({
      schema,
      graphiql: true,
      context: { ctrl , user: req.user }
    })(req, res);
  });
  
  if (!_app) app.listen(1111);
}

module.exports = {init};
