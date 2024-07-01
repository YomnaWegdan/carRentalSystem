import { ObjectId } from "mongodb"
import { db } from "../../databases/dbconnection.js"


const addRentalCar = async (req , res)=>{
    try{
    let rentalCar = await db.collection('rentals').insertOne(req.body)
    res.json({message:'success' , rentalCar})
    } catch (error) {
        res.status(400).send(error);
      }
}


const addRentalCar = async (req, res) => {
    try {
      const { car, user, rentalDate, returnDate } = req.body;
      const carToRent = await db.collection('cars').findOne({ _id: new ObjectId(car) });
      
      if (!carToRent || carToRent.rentalStatus === 'rented') {
        return res.status(400).send({ error: 'Car is not available for rent' });
      }
      
      const rental = { car: new ObjectId(car), user: new ObjectId(user), rentalDate, returnDate };
      const result = await db.get().collection('rentals').insertOne(rental);
      
      await dbcolle.ction('cars').updateOne({ _id: new ObjectId(car) }, { $set: { rentalStatus: 'rented' } });
      
      res.status(201).json(result);
    } catch (error) {
      res.status(400).send(error);
    }
  };


const getAllRentalCars = async (req , res)=>{
    try {
    let rentalCars = await db.collection('rentals').find().toArray()
    res.json({message:'success' , rentalCars})
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
    addRentalCar , getAllRentalCars , getOneRentalCar , updateRentalCar , deleteRentalCar
}