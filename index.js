import dotenv from 'dotenv'
dotenv.config()
import express from "express";
import mongoose from "mongoose"
import cors from 'cors'
import helmet from "helmet";

import { registerValidation } from './validations/auth.js'
import { register } from './controllers/UserController.js'
import { tablesValidation } from "./validations/tables.js";
import { create, findAll, findOne, remove, update } from "./controllers/TableController.js";


const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())

const port = process.env.PORT

mongoose.set('strictQuery', false);
mongoose.connect(
    `mongodb+srv://${process.env.AUTHUSER}:${process.env.PASSWORD}@cluster0.r8hh2et.mongodb.net/blogd?retryWrites=true&w=majority`
).then(() => {
    console.log('db ok')
}).catch((err) => {
    console.log(err)
})

app.patch('/table/:id', update)

app.delete('/table/:id', remove)

app.get('/table/:id', findOne)

app.get('/tables', tablesValidation, findAll)

app.post('/tables', tablesValidation, create)

app.post('/auth/register', registerValidation, register)



app.listen(port, () => {
    console.log(`server started on port ${port}`)
})