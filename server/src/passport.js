const passport = require('passport')
const GoogleStrategy  = require('passport-google-oauth20').Strategy;
// require('https').globalAgent.options.rejectUnauthorized = false;


passport.serializeUser((user,done)=>{
    done(null,user);
});

passport.deserializeUser((user,done)=>{
    done(null,user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    passReqToCallback:true
    },
    (request, accessToken, refreshToken, profile, done) => {
        return done(null, profile);
      }
));

