const config = require('config');
const mongoose = require('mongoose');
const express = require('express');

const users = require('./routes/users');
const app = express();

if(!config.get('jwtPrivateKey')){
    console.error('JWT is not defiend');
    process.exit(1);
}
mongoose.connect('mongodb://localhost/movieApp', {
        useCreateIndex: true,
        useNewUrlParser: true
     })
    .then( () => console.log('Connect to mongodb'))
    .catch(() => console.error(' Could not connect to MongoDB...'));

app.use(express.json());
app.use('/api/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));