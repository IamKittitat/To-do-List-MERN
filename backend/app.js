const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const todos = require('./routes/api/todos');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));


app.get('/', (req, res) => res.send('Hello world!'));
app.use('/api/todos',todos)

const port = process.env.PORT || 8000;

app.listen(port,() => console.log(`Server running on port ${port}`));
