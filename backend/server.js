import express from 'express'
import connectDB from './config/db.js'
import colors from 'colors'
import products from './data/products.js'
import dotenv from 'dotenv'

dotenv.config()

connectDB()

const app =express()

app.get('/',(req,res)=>{
    res.send('API is running')
}
)

app.get('/api/products',(req,res)=>{
    res.json(products)}
)

app.get('/api/products/:id',(req,res)=>{
    const product = products.find((p)=>p._id === req.params.id)
    res.json(product)
})

app.listen(process.env.PORT,console.log(`The server is running on Port ${process.env.PORT}`.yellow.bold))