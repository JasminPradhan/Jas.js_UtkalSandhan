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
    clientID:'131181674018-2jauvtek85ikdtarjccfh51f3r072avf.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL:'http://localhost:3000/auth/callback',
    passReqToCallback:true
    },
    function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
      }
));

