require('dotenv').config()
const { MongoClient } = require("mongodb");
const url = 'mongodb+srv://wdsandeep:'+ process.env.PW +'@cluster0.vgg3n.mongodb.net';
const database = 'e-comm';
const client = new MongoClient(url);


async function dbConnect() {
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
}

module.exports = dbConnect;
