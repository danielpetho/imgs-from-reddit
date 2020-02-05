const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');
const cors = require('cors');


const MongoClient = require('mongodb').MongoClient;
const service = require('feathers-mongodb');

// Create an Express compatible Feathers application instance.
const app = express(feathers());

// Enable Cross-Origin
app.use(cors());
// Turn on JSON parser for REST services
app.use(express.json());
// Turn on URL-encoded parser for REST services
app.use(express.urlencoded({ extended: true }));
// Enable REST services
app.configure(express.rest());
// Enable Socket.io
app.configure(socketio());

// Connect to the db, create and register a Feathers service.
app.use('/todos', service({
}));

// A basic error handler, just like Express
app.use(express.errorHandler());

// Connect to your MongoDB instance(s)
MongoClient.connect('mongodb://localhost:27017/gfbq5f')
    .then(function (client) {
        // Set the model now that we are connected
        app.service('todos').Model = client.db('gfbq5f').collection('todos');

    }).catch(error => console.error(error));

// Start the server.
const port = 3030;

app.listen(port, () => {
    console.log(`Feathers server listening on port ${port}`);
});