const mongoose = require('mongoose')
module.exports = () => {

mongoose.connect("mongodb+srv://anandishika07:mALobWvqSSCEVVoM@cluster0.jfdvplt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected");
}).catch((e) => {
    console.log("Error connecting to database", e);
});
}