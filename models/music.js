
const mongoose = require("mongoose");
// remote db connection settings. For security, connectionString should be in a separate file not committed to git


const connectionString = "mongodb+srv://dbuser:P@ssw0rd1@cluster0-h4s4s.mongodb.net/test?retryWrites=true&w=majority"

mongoose.connect(connectionString, { dbName: 'mysccproject', useNewUrlParser: true }); 

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define Book model in JSON key/value pairs
// values indicate the data type of each key
const mySchema = mongoose.Schema({
 title: { type: String, required: true },
 author: String,
 artist: String,
 type: String,
 year: Date
 
}); 

module.exports = mongoose.model('Music', mySchema, 'music');
