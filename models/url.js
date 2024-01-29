const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017'; // Replace with your MongoDB server URL

// Database Name
const dbName = 'yourDatabaseName'; // Replace with your database name

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the server
client.connect(function(err) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB');

  // Use the database
  const db = client.db(dbName);

  // Perform operations here...

  // Close the connection
  client.close();
});
