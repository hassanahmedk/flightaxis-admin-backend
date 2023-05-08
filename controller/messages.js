import MessageModel from "../db/messages.js";

export const getMessages = (req, res) => {
    MessageModel.find()
    .then((messages)=>{
        res.send(messages);
    })
    .catch((error)=>{
        console.log(error);
        res.send("An Error occured");
    })
};

export const addMessage = (req, res) => {
  const newMessage = new MessageModel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
    date: req.body.date,
  });
  newMessage
    .save()
    .then((result) => {
      console.log("Added the message");
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};



export const deleteMessage = (req, res) => {
    MessageModel.findByIdAndDelete(req.body.id)
    .then((result)=>{
        console.log("deleted message");
        res.send(result);
    })
    .catch((error)=>{
        res.send(result);
    })
};
