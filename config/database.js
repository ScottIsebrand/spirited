const mongoose = require('mongoose');

// connect to db rather than exporting function to run in listening funct
mongoose.set('strictQuery', true); // This just gets rid of a deprecation warning
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});
