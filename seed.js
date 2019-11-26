const mongoose = require('mongoose');
const Location = require('./models/location.js');
​
const seedUsers = [
    {
        locations: "Brazil"
    }
];
​
// Seeding function ttt
const seedDB = () => {
  // Declare db name, URI, and instantiate connection
  const dbName = 'locations'
  const dbURI = `mongodb://localhost:27017/${dbName}`;
  const dbConnection = mongoose.connection;
​
  dbConnection.on('error', (err) => console.log('DB Connection Error: ', err));
  dbConnection.on('connected', () => console.log('DB Connected to: ', dbURI));
  dbConnection.on('disconnected', () => console.log('DB Disconnected'));
  
  mongoose.connect(
    dbURI,
    { useNewUrlParser: true },
    () => console.log(`${dbName} db running on ${dbURI}`)
  );
  
  Location.collection.drop()
​
Location.create(seedUsers, (err, newUsers) => {
    if (err) {
      console.log('Seeding error: ', err);
    } else {
      console.log('Seeding OK: ', newUsers);
    }
    dbConnection.close();
  });
}
​
seedDB();
​
module.exports = seedUsers;