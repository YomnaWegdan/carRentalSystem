import express from 'express'
import { db } from './databases/dbconnection.js';
import carRouter from './modules/Car/car.routes.js';

const app = express()
const port = 3000

app.use(express.json())
app.use('/cars' , carRouter)
app.use('/users' , user)




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))