const express = require("express");
const app = express();

const session = require("express-session");

const { checkAuthenticated } = require("./middleware/checkAuthenticated");

const routeAuthGoogle = require("./routes/auth/googleAuth");

//Middleware
app.use(
  session({
    secret: "passwordsegreta",
    resave: false,
    saveUninitialized: true,
  })
);

//Define the Google Auth Routes
app.use("/", routeAuthGoogle);

app.get("/", (req, res) => {
  if (req.session.passport) {
    res.redirect("/dashboard");
  } else {
    res.redirect("/login");
  }
});

//Define the Login Route
app.get("/login", (req, res) => {
  res.send("<a href='/auth/google'>Login with GOOGLE</a>");
});

//Define the Dashboard Route
app.get("/dashboard", checkAuthenticated, (req, res) => {
  console.log(req.session.passport.user);

  const { id, displayName, emails, photos, email_verified, __json } =
    req.session.passport.user;

  res.json({
    id: id,
    displayName: displayName,
    emails: emails,
    photos: photos,
    email_verified: email_verified,
    __json: __json,
  });
});

//Define the Logout
app.post("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
  console.log(`-------> User Logged out`);
});

//Start the NODE JS server
app.listen(3001, () => console.log(`Server started on port 3001...`));
