const express = require('express');
const cors = require('cors');
const connectDB = require('./Connection');
const app = express();

app.use(cors());

const posts = require('../Api/Posts');


connectDB();
app.use(express.json({ extended: false }));
app.use('/api/posts', posts);

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`server started on port ${port}`) });