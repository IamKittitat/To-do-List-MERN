const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); // env instead of default.json 
// lib > .env , process.env.mongoURI ,  

// why async/await ,  .then .catch
const connectDB = async () => {
    try {
        mongoose.connect(
            db,
            {
                useNewUrlParser: true
            }
        );

        console.log("MongoDB is Connected");
    } catch(err){
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;