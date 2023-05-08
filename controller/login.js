import AdminModel from "../db/admins.js";

export const popDB = async (req, res) => {
  try {
    const newUser = new AdminModel({
      fullName: "FlightAxis Admin",
      username: "flightaxis",
      email: "flightaxis@email.com",
      password: "axis@flight0",
    });

    newUser
      .save()
      .then(function (result) {
        res.send(result);
      })
      .catch(function (err) {
        console.log(err);
        res.send("An error occured");
      });
  } catch (error) {
    res.send(err);
  }
};

export const authorizeLogin = async (req, res) => {
  try {
    AdminModel.findOne({username: req.body.username}).then((user) => {
      console.log(user);
      if (user === null) {
        res.json({ response: "User Not Found", loginAttempt: false });
      } else {
        if (user.password === req.body.password) {
          res.json({ response: "Logged In", loginAttempt: true });
        } else {
          res.json({ response: "Password Incorrect", loginAttempt: false });
        }
      }
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
