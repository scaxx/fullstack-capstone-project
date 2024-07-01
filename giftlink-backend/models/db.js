// db.js
require('dotenv').config({path: './util/import-mongo/.env'});
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {

    if (dbInstance){
        return dbInstance
    };

    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });      

    try {
        // Connect to MongoDB
        await client.connect();

        // Connect to database giftDB and store in variable dbInstance
        dbInstance = client.db(dbName);
        console.log(`Connected to MongoDB: ${url}`);

        // Return database instance
        return dbInstance;
    } catch (e) {
        console.error('Failed to connect to DB', e);
        throw e;
    }

}

module.exports = connectToDatabase;
