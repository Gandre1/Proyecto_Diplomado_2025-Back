require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connection/dbConnection');
const cors = require('cors');


connectDB();



const app = express();

app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
