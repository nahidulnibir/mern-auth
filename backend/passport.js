const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').extractJwt;
const mongoose = rerquire('mongoose');
const User = require('module/user');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.jwtSecret;

module.export = (passport) => {
  passport.use(
    new jwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt.jwt_payload.id)
        .then((User) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
