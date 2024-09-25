const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const db = process.env.DB_URL || 'mongodb://localhost:27017/testUserDb';

mongoose.connect(db).then(() => console.log('db is connected')).catch(() => console.log('db connection error'));

const User = mongoose.model('users', mongoose.Schema({
    name: String,
    email: String
}))

app.post('/user', async(req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email
    }

    const newUser = await User.create(user);
    await newUser.save();
    res.status(201).send('new user created!')
})

app.get('/', async(req, res) => {
    const users = await User.find();
    // res.status(200).send(users);
    res.send('hello')
    console.log("hello!");
    
})

app.listen(PORT, () => {
    console.log(db);
    console.log(`App is listening at port http://localhost:${PORT}`);
})