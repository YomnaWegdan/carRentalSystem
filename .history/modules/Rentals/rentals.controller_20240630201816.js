import { ObjectId } from "mongodb"
import { db } from "../../databases/dbconnection.js"


const addRental = async (req , res)=>{
    try{
    let carRental = await db.collection('rentals').insertOne(req.body)
    res.json({message:'success' , carRental})
    } catch (error) {
        res.status(400).send(error);
      }
}

const getAllCars = async (req , res)=>{
    try {
    let carRental = await db.collection('cars').find().toArray()
    res.json({message:'success' , cars})
    }catch (error) {
        res.status(500).send(error);
      }
    };
    

const getOneCar = async (req , res)=>{
    try {
    let car = await db.collection('cars').findOne({_id:new ObjectId(req.params.id)})
    if (!car) {
        return res.status(404).send();
      }
    res.json({message:'success' , car})
    }catch (error) {
        res.status(500).send(error);
    }};



const updateCar = async (req , res)=>{
    try{
    let car = await db.collection('cars').updateOne({_id:new ObjectId(req.params.id)} , {$set:req.body})
    res.json({message:'success' , car})
    }catch (error) {
        res.status(400).send(error);
    }}

const deleteCar = async (req , res)=>{
    try{
    let car = await db.collection('cars').deleteOne({_id:new ObjectId(req.params.id)})
    res.json({message:'success' , car})
    }catch (error) {
        res.status(400).send(error);
    }}