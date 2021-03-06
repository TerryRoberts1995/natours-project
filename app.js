const fs = require('fs');
const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes.js');
const userRouter = require('./routes/userRoutes.js');

const app = express();


//  Middleware's
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
    console.log('Hello From the middleware!');

    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();

    next();
});

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
});