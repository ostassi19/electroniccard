const express = require('express');
const bodyParser = require('body-parser');
const dotenv= require('dotenv')

const app = express();
const port = 3000;
const connectDB= require('./database/db')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//mongodb connection
connectDB()

app.use('/api/maintenance',require('./routes/maintenanceRoutes'))
app.use('/api/supervisedMachine',require('./routes/supersisedMachineRoutes'))
app.use('/api/productivity',require('./routes/productivityRoutes'))
app.use('/api/workPlanification',require('./routes/workPlanificationRoutes'))
app.use('/api/alert',require('./routes/alertRoutes'))
app.use('/api/users',require('./routes/userRoutes'))


// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
