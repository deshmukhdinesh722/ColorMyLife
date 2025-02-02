import express from 'express'
import mongoose from 'mongoose'
import db_name from './constant.js';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from "dotenv"
dotenv.config({path:'./env'})

const app=express()
const PORT=process.env.PORT || 5000;

const cross=process.env.CORS_ORIGIN

// DB connection
mongoose.connect('mongodb+srv://dineshdeshmukh168:TLkJuIiOWznaNHdy@cluster0.fff7u.mongodb.net/').then(()=>{
    console.log("MongoDb Connected");
    
}).catch((error)=>{
    console.log(error);
    
}) 

const allowedOrigins = ['http://localhost:5173'] // Add your frontend URL

app.use(cors({
    origin: allowedOrigins,
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization', 'Cache-Control']
}));

app.use(cookieParser())
app.use(express.json())

import router from './routes/auth.routes.js';
import adminRouter from './routes/product.routes.js';
import userRouter from './routes/userProduct.routes.js';
import adminSmmRouter from './routes/smm.routes.js';
import adminGdRouter from './routes/gd.routes.js';
import adminSmphRouter from './routes/smph.routes.js';
import adminDaRouter from './routes/da.routes.js';
import cartRouter from './routes/cart.routes.js';
import addressRouter from './routes/address.routes.js';
import adminOrderRouter from './routes/adminOrder.routes.js';
import statusRouter from './routes/status.routes.js';
import orderRouter from './routes/order.routes.js';
import allAddressRouter from './routes/allAddress.routes.js';
import quatationRouter from './routes/quotation.routes.js';
// jevha apan api chya auth l ajau tevha router laa call kara =>

app.use('/api/auth',router)
app.use('/api/admin/product',adminRouter)
app.use('/api/user-page/product',userRouter)
app.use('/api/admin/smm',adminSmmRouter)
app.use('/api/admin/gd',adminGdRouter)
app.use('/api/admin/adminOrder',adminOrderRouter)
app.use('/api/admin/smph',adminSmphRouter)
app.use('/api/admin/da',adminDaRouter)
app.use('/api/user-page/cart',cartRouter)
app.use('/api/user-page/address',addressRouter)
app.use('/api/admin/status',statusRouter)
app.use('/api/user-page/order',orderRouter)
app.use('/api/admin/allAddress',allAddressRouter)
app.use('/api/admin/quotation',quatationRouter)












app.listen(PORT,()=>{
    console.log("Server is now ", PORT);
    
})