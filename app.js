const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const homeroutes = require("./routes/menuroutes");
const menuroutes = require("./routes/menuroutes");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use("/", homeroutes);
app.use("/menu", menuroutes);

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 3000, () => {
  console.log("The server is running on PORT 3000");
});
