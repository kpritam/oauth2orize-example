"use strict";

const passport = require("passport");
const login = require("connect-ensure-login");

module.exports.index = (request, response) => {
  response.send("OAuth 2.0 Server277");
  console.log(request.query.code);
};

module.exports.loginForm = (request, response) => response.render("login");

module.exports.login = passport.authenticate("local", {
  successReturnToOrRedirect: "/",
  failureRedirect: "/login"
});

module.exports.logout = (request, response) => {
  request.logout();
  response.redirect("/");
};

module.exports.account = [
  login.ensureLoggedIn(),
  (request, response) => response.render("account", { user: request.user })
];
