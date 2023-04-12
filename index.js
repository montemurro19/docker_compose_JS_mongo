const express = require('express')
const bodyParser = require('body-parser')

//local imports
const connectDb = require('./db.js')
const employeeRoutes = require('./controllers/employee.controller')
const { errorHandler } = require('./middlewares')

const PORT = process.env.PORT || 3000;

const app = express()
//middleware
app.use(bodyParser.json())
app.use('/api/employees', employeeRoutes)
app.use(errorHandler)

connectDb().then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
});