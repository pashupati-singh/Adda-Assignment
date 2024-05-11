
const fs = require('fs');
const bookings = require('../bookings.json');

const getBookings = (req, res) => {
    res.json(bookings);
};

const createBooking = (req, res) => {
    const { type, date, startTime, endTime } = req.body;

    const bookingType = type.toLowerCase();

    const existingBooking = bookings.find(booking => 
        booking.type.toLowerCase() === bookingType && booking.date === date && (
            (startTime >= booking.startTime && startTime < booking.endTime) ||
            (endTime > booking.startTime && endTime <= booking.endTime) ||
            (startTime <= booking.startTime && endTime >= booking.endTime)
        )
    );

    if (existingBooking) {
        return res.status(400).json({ message: 'Booking failed. Already booked.' });
    }

    let price;
    if (bookingType === 'club house') {
        if (startTime >= 10 && endTime <= 16) {
            price = 100 * (endTime - startTime);
        } else if (startTime >= 16 && endTime <= 22) {
            price = 500 * (endTime - startTime);
        } else {
            price = 0;
        }
    } else if (bookingType === 'tennis court') {
        price = 50 * (endTime - startTime);
    } else {
        return res.status(400).json({ message: 'Invalid booking type.' });
    }

    bookings.push({ type: bookingType, date, startTime, endTime, price });

    fs.writeFile('bookings.json', JSON.stringify(bookings, null, 2), (err) => {
        if (err) {
            console.error('Error writing bookings file:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(201).json({ message: 'Booking successful.', price });
    });
};


module.exports = { createBooking,getBookings };
