require('dotenv').config();
const express = require('express');
const connectDB = require('./db/connection/dbConnection');
const cors = require('cors');
const path = require('path');

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'public/images')))
    
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const lapidaRoutes = require('./routes/lapidaRoutes');
const carritoRoutes = require('./routes/cartRoutes');

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/lapidas', lapidaRoutes);
app.use('/api/carrito', carritoRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
