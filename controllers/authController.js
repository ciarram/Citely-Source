const passport = require("passport");
const User = require("../models/user");

// Defining methods for the authController
module.exports = {
  doRegister: function (req, res) {
    // console.log("inside doregister1")
  // console.log(req.body.password)
    User.register(new User({ username: req.body.username, password: req.body.password }), req.body.password, function (err, user) {
      if (err) {
        // console.log(err.errors)
        // console.log("inside doRegister2")          
        return res.status(500).json({ error: err });
      }
      passport.authenticate('local')(req, res, function () {
        // console.log("inside doRegister3")          
        return res.status(200).json({ result: 'success', user: user });
      });
    });
  },
  doLogin: function (req, res) {
    console.log("inside doLogin")
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({ result: 'success', user: req.user, session: req.session });
    });
  },
  logout: function (req, res) {
    req.logOut();
    return res.status(200).json({result:  "success"});
  }
};
