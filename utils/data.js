const connection = require('../config/connection');
const User = require('../models/user');
const Thoughts = require('../models/thoughts');

const userData = [
    {
        "username": "lernantino",
        "email": "lernantino@gmail.com",
        "_id": "01",
    },
    {
        "username": "ashley",
        "email": "ashley@gmail.com",
        "_id": "02",
    },
    {
        "username": "animalLover",
        "email": "animalLover@gmail.com",
        "_id": "03",
    },
    {
        "username": "jane",
        "email": "jane@gmail.com",
        "_id": "04",
    },
    {
        "username": "john",
        "email": "john@gmail.com",
        "_id": "05",
    },
];
  
const thoughtsData = [
    {
        "thoughtText": "Here's a cool thought...",
        "username": "lernantino",
        "_id": "01"
    },
    {
        "thoughtText": "This is interesting",
        "username": "ashley",
        "_id": "02",
    },
    {
        "thoughtText": "I like animals",
        "username": "animalLover",
        "_id": "03",
    },
    {
        "thoughtText": "I think...",
        "username": "jane",
        "_id": "04",
    },
    {
        "thoughtText": "That's cool",
        "username": "john",
        "_id": "05",
    }
];

const users = [];

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    let userCheck = await connection.db.listCollections({  }).toArray();

    const users = [];

    users.push({
    });

    console.info('seeding complete');
    process.exit(0);
})
