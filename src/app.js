
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("CI/CD Node.js Application is Running!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP"
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
  });
}

module.exports = app;
