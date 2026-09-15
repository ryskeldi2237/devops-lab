const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from backend!",
    version: "v1",
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
