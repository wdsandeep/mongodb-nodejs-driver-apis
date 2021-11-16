const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const express = require('express');
const app = express();

app.use(express.json());    // before express 4.6 we used to use body-parser, now it is not required

app.get('/', async (req, res) => {
    let data = await dbConnect();
    data = await data.find().toArray()
    res.send(data)
})

app.post('/', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insert(req.body)
    res.send(result)
})

app.put('/:name', async (req, res) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
        )
    console.log(result);
    res.send({result: 'update'})
})

app.delete("/:id", async (req, res) => {
    console.log(req.params.id);
    const data = await dbConnect();
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    res.send(result);
})

app.listen(5000)