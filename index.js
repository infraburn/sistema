const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const routes = require('./routes/tickets');
const PORT = process.env.PORT || 3002;
const cors = require('cors');

// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI).then(() => {
  const app = express();
  app.use(express.json());
  app.use(express.static('public'));
  app.use(cors());
  app.use('/api', routes);

  app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}!`);
  });
});
