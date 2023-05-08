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
  const newBooking = new BookingModel({
    airline: req.body.airline,
    customer_name: req.body.customer_name,
    leaving_from: req.body.leaving_from,
    going_to: req.body.going_to,
    trip_type: req.body.trip_type,
    departing_on: req.body.departing_on,
    returning_on: req.body.returning_on,
    no_of_passengers: req.body.no_of_passengers,
    adults: req.body.adults,
    kids: req.body.kids,
    infants: req.body.infants,
    customer_email: req.body.customer_email,
    customer_phone: req.body.customer_phone,
    total_fare: req.body.total_fare,
    submitted_on: req.body.submitted_on,
  });
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
