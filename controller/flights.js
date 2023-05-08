import FlightModel from "../db/flights.js";

export const getFlights = (req, res) => {
    FlightModel.find()
    .then((flights)=>{
        res.send(flights);
    })
    .catch((error)=>{
        console.log(error);
        res.send("An Error occured");
    })
};

export const addFlight = (req, res) => {
  const newFlight = new FlightModel({
    airline: req.body.airline,
    departure_date: req.body.departure_date,
    leaving_from: req.body.leaving_from,
    going_to: req.body.going_to,
    flight_class: req.body.flight_class,
    adult_fare: req.body.adult_fare,
    departure_time: req.body.departure_time,
    infants_fare: req.body.infants_fare,
  });
  newFlight
    .save()
    .then((result) => {
      console.log("Added the flight");
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const editFlight = (req, res) => {
    FlightModel.findOneAndUpdate({_id:req.body.id}, {...req.body}, {new:true})
    .then((result)=>{
        console.log("update func successfull");
        console.log(result);
        res.send(result);
    })
    .catch((error)=>{
        res.send(result);
    })
};

export const deleteFlight = (req, res) => {
    FlightModel.findByIdAndDelete(req.body.id)
    .then((result)=>{
        console.log("deleted func successfull");
        res.send(result);
    })
    .catch((error)=>{
        res.send(result);
    })
};
