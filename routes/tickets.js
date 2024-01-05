const express = require('express');
const Ticket = require('../models/Ticket'); // new
const router = express.Router();

// Get all posts
router.get('/tickets', async (req, res) => {
  const tickets = await Ticket.find();
  res.send(tickets);
});

router.post('/createTicket', async (req, res) => {
  const newPedroData = new Ticket({
    // id: crypto.randomUUID(),
    ...req.body,
  });
  console.log(newPedroData);
  await newPedroData.save();
  res.send(newPedroData);
});

module.exports = router;
