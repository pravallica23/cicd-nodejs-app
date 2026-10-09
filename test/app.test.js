
const request = require("supertest");
const app = require("../src/app");

describe("Node.js Application Tests", () => {
  test("GET / should return the welcome message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      "CI/CD Node.js Application is Running!"
    );
  });

  test("GET /health should return UP status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      status: "UP"
    });
  });
});
