
const express = require('express');
const bookingRoutes = express.Router();
const { createBooking, getBookings } = require('../controllers/bookingController.js');

bookingRoutes.post('/', createBooking);
bookingRoutes.get('/', getBookings);

module.exports = bookingRoutes;
