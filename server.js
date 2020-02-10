const express = require("express");
const path = require("path");
const app = express();

const routes = require("./routes");

app.use(express.static(path.join(__dirname, "build")));

app.use("/api", routes);

app.get("/shows", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Server running on http://localhost:${process.env.PORT || 8080}`)
);
