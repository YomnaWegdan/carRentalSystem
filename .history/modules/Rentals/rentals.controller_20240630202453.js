import { ObjectId } from "mongodb"
import { db } from "../../databases/dbconnection.js"


const addRentalCar = async (req , res)=>{
    try{
    let rentalCar = await db.collection('rentals').insertOne(req.body)
    res.json({message:'success' , carRental})
    } catch (error) {
        res.status(400).send(error);
      }
}

const getAllRentalCars = async (req , res)=>{
    try {
    let carsRental = await db.collection('rentals').find().toArray()
    res.json({message:'success' , carsRental})
    }catch (error) {
        res.status(500).send(error);
      }
    };
    

const getOneRentalCar = async (req , res)=>{
    try {
    let rentalCar = await db.collection('rentals').findOne({_id:new ObjectId(req.params.id)})
    if (!rentalCar) {
        return res.status(404).send();
      }
    res.json({message:'success' , rentalCar})
    }catch (error) {
        res.status(500).send(error);
    }};

const updateRentalCar = async (req , res)=>{
    try{
    let rentalCar = await db.collection('rentals').updateOne({_id:new ObjectId(req.params.id)} , {$set:req.body})
    res.json({message:'success' , rentalCar})
    }catch (error) {
        res.status(400).send(error);
    }}

const deleteRentalCar = async (req , res)=>{
    try{
    let rentalCar = await db.collection('rentals').deleteOne({_id:new ObjectId(req.params.id)})
    res.json({message:'success' , rentalCar})
    }catch (error) {
        res.status(400).send(error);
    }}

export{
    addRentalCar , 
}