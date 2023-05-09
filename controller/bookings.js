import BookingModel from "../db/bookings.js";

export const getBookings = (req, res) => {
  BookingModel.find()
    .then((bookings) => {
      res.send(bookings);
    })
    .catch((error) => {
      console.log(error);
      res.send("An Error occured");
    });
};

export const addBooking = (req, res) => {
  const newBooking = new BookingModel(req.body);
  newBooking
    .save()
    .then((result) => {
      console.log("Added the booking");
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};


export const deleteBooking = (req, res) => {
    BookingModel.findByIdAndDelete(req.body.id)
    .then((result)=>{
        console.log("deleted func successfull");
        res.send(result);
    })
    .catch((error)=>{
        res.send(result);
    })
};
