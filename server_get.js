const express = require("express");
// const mongoose = require("mongoose");


const bodyParser = require("body-parser");
//const route = require('./routers/router');
//app.use(route);



var app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./database')();
require('./routers/router')(app);



// Connect to MongoDB
// mongoose.connect("mongodb+srv://anandishika07:mALobWvqSSCEVVoM@cluster0.jfdvplt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("Database connected");
// }).catch((e) => {
//     console.log("Error connecting to database", e);
// });

// Define a schema and model for the newsletter subscriptions
// const subscriptionSchema = new mongoose.Schema({
//     fullName: { type: String, required: true },
//     email: { type: String, required: true }
// });

// const Subscription = mongoose.model('Subscription', subscriptionSchema);

// Function to handle saving a subscription
// const saveSubscription = async (req, res) => {
//     try {
//         const newSubscription = new Subscription(req.body); // Use Subscription model
//         await newSubscription.save();
//         res.status(201).send('Subscription saved successfully');
//     } catch (error) {
//         res.status(400).send('Error saving subscription: ' + error.message);
//     }
// };

// Route to handle subscriptions
//app.post('/subscribe', saveSubscription);

const port = 3040;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
