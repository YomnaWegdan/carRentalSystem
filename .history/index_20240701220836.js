import express from 'express'
import { db } from './databases/dbconnection.js';
import carRouter from './modules/Car/car.routes.js';
import userRouter from './modules/Users/user.routes.js';
import rentalCarsRouter from './modules/Rentals/rentals.routes.js';
import co

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use('/cars' , carRouter)
app.use('/users' , userRouter)
app.use('/rentals' , rentalCarsRouter)





app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))