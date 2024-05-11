const express = require('express');
const bookingRoutes = require('./routes/bookingRoutes');
const app = express();
const port = 8080;

app.use(express.json());

app.use('/bookings', bookingRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});