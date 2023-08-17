const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
} = require("./config/googleCreds");
//Get the GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET from Google Developer Console

authUser = (request, accessToken, refreshToken, profile, done) => {
  return done(null, profile);
};

//Use "GoogleStrategy" as the Authentication Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://127.0.0.1:3001/auth/google/callback",
      passReqToCallback: true,
    },
    authUser
  )
);

passport.serializeUser((user, done) => {
  // console.log(`\n--------> Serialize User:`);
  // console.log(user);

  // The USER object is the "authenticated user" from the done() in authUser function.
  // serializeUser() will attach this user to "req.session.passport.user.{user}", so that it is tied to the session object for each session.

  done(null, user);
});

passport.deserializeUser((user, done) => {
  // console.log("\n--------- Deserialized User:");
  // console.log(user);

  // This is the {user} that was saved in req.session.passport.user.{user} in the serializationUser()
  // deserializeUser will attach this {user} to the "req.user.{user}", so that it can be used anywhere in the App.

  done(null, user);
});

module.exports = { passport };
