import PackageBookingModel from "../db/packageBookings.js";

export const getPackageBookings = (req, res) => {
  PackageBookingModel.find()
    .then((packageBookings) => {
      res.send(packageBookings);
    })
    .catch((error) => {
      console.log(error);
      res.send("An Error occured");
    });
};

export const addPackageBooking = (req, res) => {
  const newBooking = new PackageBookingModel(req.body);
  newBooking
    .save()
    .then((result) => {
      console.log("Added the package booking");
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};


export const deletePackageBooking = (req, res) => {
  PackageBookingModel.findByIdAndDelete(req.body.id)
    .then((result)=>{
        console.log("deleted func successfull");
        res.send(result);
    })
    .catch((error)=>{
        res.send(result);
    })
};
