require("dotenv/config");
const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;
const router = require("./routes");
const api = require("./routes/api");

app.use(cors());
app.use(bodyParser.json());
app.use("/", router);
app.use("/api", api);

(async () => {
  await mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DB_CONNECTED!");
  });
})();

app.listen(PORT, () => {
  console.log(`Server is Up! http://localhost:${PORT}`);
});
