const passport = require("passport");
const User = require("../models/user");

// Defining methods for the authController
module.exports = {
  doRegister: function (req, res) {
    console.log("inside doregister1")
    User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
      if (err) {
        console.log(err.errors)
        console.log("inside doRegister2")  //TEST        
        return res.status(500).json({ error: err });
      }
      passport.authenticate('local')(req, res, function () {
        console.log("inside doRegister3")  //TEST        
        return res.status(200).json({ result: 'success', user: user });
      });
    });
  },
  doLogin: function (req, res) {
    passport.authenticate('local')(req, res, function () {
      return res.status(200).json({ result: 'success', user: req.user, session: req.session });
    });
  },
  logout: function (req, res) {
    req.logOut();
    return res.status(200).json({result:  "success"});
  }
};
