const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/connectDB');

connectDB();

const app = express();

const PORT = process.env.PORT;

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use('/auth', authRoutes);
app.use('/task', taskRoutes);

app.listen(PORT, () => console.log(`server started at port ${PORT}`));