## Apartment Booking API

## Introduction
This project is an API for booking apartment facilities such as clubhouse and tennis court. It allows users to create bookings for specific dates and times, with dynamic pricing based on the type of facility and booking duration.

## Tech Stack
Node.js
Express.js
JSON (for local storage)

## Folder Structure

apartment-booking-api/

│
├── controllers/

│   └── bookingController.js
│
├── routes/

│   └── bookingRoutes.js
│
├── bookings.json

│
└── index.js

controllers/: Contains controller functions for handling booking logic.

routes/: Defines routes for handling incoming HTTP requests.

bookings.json: JSON file for storing booking data locally.

server.js: Entry point file for the Express server.

## Endpoints

Create Booking

Endpoint: /bookings

Method: POST

Request Body:

json

{
    "type": "club house",
    
    "date": "2024-05-15",
    
    "startTime": 12,
    
    "endTime": 15
    
}

Response:

201 Created: Booking created successfully.

400 Bad Request: Invalid input or booking conflict.

500 Internal Server Error: Server error.

Get All Bookings

Endpoint: /bookings

Method: GET

Response:

json

[
    {
    
        "type": "club house",
        
        "date": "2024-05-15",
        
        "startTime": 12,
        
        "endTime": 15,
        
        "price": 300
        
    },
    
    {
        "type": "tennis court",
        
        "date": "2024-05-16",

        "startTime": 14,
        
        "endTime": 16,
        
        "price": 100
    }
]

Usage
Clone the repository:

git clone https://github.com/pashupati-singh/Adda-Assignment.git

Install dependencies:

cd apartment-booking-api

npm install

Start the server:

node index.js or npm run server (Nodemon)

## Example

To create a new booking for the club house on May 15, 2024, from 12 PM to 3 PM:

'{

    "type": "club house",
    
    "date": "2024-05-15",
    
    "startTime": 12,
    
    "endTime": 15
}' 

## http://localhost:8080/bookings
