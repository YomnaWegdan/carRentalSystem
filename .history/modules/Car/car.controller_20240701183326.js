import { ObjectId } from "mongodb"
import { db } from "../../databases/dbconnection.js"


const getAllCars = async (req , res)=>{
    try {
    let cars = await db.collection('cars').find().toArray()
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

const addCar = async (req , res)=>{
    try{
    let car = await db.collection('cars').insertOne(req.body)
    res.json({message:'success' , car})
    } catch (error) {
        res.status(400).send(error);
      }
}

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

    
        // const getCarsByModel = async (req , res)=>{
        //     try{
        //         const { model } = req.query;
        //         const cars = await db.collection('cars').find({ model }).toArray();
        //         res.json({message:'success' , cars})
        //     }catch (error) {
        //         res.status(500).send(error);
        // }}
    
        const getCarsByModel = async (req, res) => {
            try {
                const { model } = req.query;
        
                if (!model) {
                    return res.status(400).json({ message: 'Model parameter is required' });
                }
        
                const cars = await db.collection('cars').find({ model }).toArray();
        
                if (!cars.length) {
                    return res.status(404).json({ message: 'No cars found for the specified model' });
                }
        
                res.json({ message: 'success', cars });
            } catch (error) {
                console.error('Error fetching cars by model:', error);
                res.status(500).json({ message: 'Internal Server Error', error: error.message });
            }
        };

    const getAvailableCarsByModel = async (req , res)=>{
        try{
            const { model } = req.query;
            const cars = await db.collection('cars').find({ model , rentalStatus:'available'}).toArray();
            res.json({message:'success' , cars})
        }catch (error) {
            res.status(500).send(error);
    }}


    const getRentedOrSpecificModelCars = async (req , res)=>{
        try{
            const { model } = req.query;
            const cars = await db.collection('cars').find({
                $or: [{model}, {rentalStatus: 'rented'}]
            }).toArray();
            res.json({message:'success' , cars})
        }catch (error) {
            res.status(500).send(error);
    }}


    const getAvailableOrRentedCarsByModel = async (req , res)=>{
        try{
            const { model } = req.query;
            const cars = await db.collection('cars').find({      
                $or: [{ model , rentalStatus: 'rented' } , { model , rentalStatus: 'available' }]
            }).toArray();
            res.json({message:'success' , cars})
        }catch (error) {
            res.status(500).send(error);
    }}



   




export {
    addCar, updateCar , deleteCar , getAllCars , getOneCar , getCarsByModel , getAvailableCarsByModel,
    getRentedOrSpecificModelCars , getAvailableOrRentedCarsByModel
}