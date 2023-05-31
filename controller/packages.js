import PackageModel from "../db/packages.js";
import { packages } from "./packagesData.js";

export const getPackages = async (req, res) => {

  
    // PackageModel.insertMany(packages)
    // .then((packages)=>{
    //     res.send(packages);
    // })
    // .catch((error)=>{
    //     console.log(error);
    //     res.send("An Error occured");
    // })
    if (req.params.city === "all"){
        PackageModel.find()
        .then((packages)=>{
            res.send(packages);
        })
        .catch((error)=>{
            console.log(error);
            res.send("An Error occured");
        })

    } else {
        PackageModel.find({going_to: req.params.package})
        .then((packages)=>{
            res.send(packages);
        })
        .catch((error)=>{
            console.log(error);
            res.send("An Error occured");
        })

    }
};


export const addPackage = (req, res) => {
  const newPackage = new PackageModel(req.body);
  newPackage
    .save()
    .then((result) => {
      console.log("Added the package");
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

export const editPackage = (req, res) => {
    PackageModel.findOneAndUpdate({_id:req.params.package}, {...req.body}, {new:true})
    .then((result)=>{
        console.log("update func successfull");
        console.log(result);
        res.send(result);
    })
    .catch((error)=>{
        res.send(result);
    })
};

export const deletePackage = (req, res) => {
    PackageModel.findByIdAndDelete(req.body.id)
    .then((result)=>{
        console.log("deleted func successfull");
        res.send(result);
    })
    .catch((error)=>{
        res.send(result);
    })
};
