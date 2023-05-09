import QuoteModel from "../db/quotes.js";

export const getQuotes = (req, res) => {
  QuoteModel.find()
    .then((Quotes) => {
      res.send(Quotes);
    })
    .catch((error) => {
      console.log(error);
      res.send("An Error occured");
    });
};

export const addQuote = (req, res) => {
  const newQuote = new QuoteModel(req.body);
  newQuote
    .save()
    .then((result) => {
      console.log("Added the Quote");
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};


export const deleteQuote = (req, res) => {
    QuoteModel.findByIdAndDelete(req.body.id)
    .then((result)=>{
        console.log("deleted func successfull");
        res.send(result);
    })
    .catch((error)=>{
        res.send(result);
    })
};




//     {
//     "customer_name": "John Doe",
//     "leaving_from": "London, London Heathrow Arpt [LHR], United Kingdom",
//     "going_to": "Lagos, Murtala Muhammed Arpt [LOS], Nigeria",
//     "trip_type": "Return",  
//     "departing_on": "2023-05-27",
//     "returning_on": "2023-05-28",
//     "no_of_passengers": 2,
//     "adults": 1,
//     "kids": 1,
//     "infants": 0,
//     "customer_email": "john@doe.com",
//     "customer_phone": "+44 234 84184",
//     "total_fare": "500.5",
//     "submitted_on": "2023-05-27"
//   }
  