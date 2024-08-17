const Subscription = require('../models/model');
const saveSubscription = async (req, res) => {
    try {
        const newSubscription = new Subscription(req.body); // Use Subscription model
        await newSubscription.save();
        res.status(201).send('Subscription saved successfully');
    } catch (error) {
        res.status(400).send('Error saving subscription: ' + error.message);
    }
};

module.exports = saveSubscription