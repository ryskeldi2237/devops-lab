const request = require("supertest");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from backend!",
    version: "v1",
  });
});

test("GET /api/hello returns the correct response", async () => {
  const response = await request(app).get("/api/hello");

  expect(response.statusCode).toBe(200);
  expect(response.body.message).toBe("Hello from backend!");
});