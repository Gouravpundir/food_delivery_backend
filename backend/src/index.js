const express = require("express");
const route = require("./routes/route.js");
const displayRoute = require("./routes/display.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb is connected");
    const fetched_data = mongoose.connection.db.collection('foods');
    fetched_data.find({}).toArray((err, data) => {
      if (err) {
        console.log(err);
      } else {
        global.foods = data;
      }
    });
    const foodCategory = mongoose.connection.db.collection('category_name');
    foodCategory.find({}).toArray((err, data) => {
      if (err) {
        console.log(err);
      } else {
        global.foodCategory = data;
      }
    });
  })
  .catch((err) => console.log(err));

app.use("/", route);
app.use("/api", displayRoute);

app.listen(process.env.PORT, function () {
  console.log("Express app running on port " + process.env.PORT);
});
