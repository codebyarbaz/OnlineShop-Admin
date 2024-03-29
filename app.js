const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const menuroutes = require("./routes/menuRoutes");
const proRoutes = require("./routes/proRoutes");
const caroRoutes = require("./routes/caroRoutes");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use("/", menuroutes);
app.use("/pro", proRoutes);
app.use("/caro", caroRoutes);

app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT || 3000, () => {
  console.log("The server is running on PORT 3000");
});
