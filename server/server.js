vonst mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
app.listen(8080, () => console.log('Server started on port 3000'));

mongoose.connect("")


