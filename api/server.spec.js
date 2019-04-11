const request = require("supertest");
const server = require("./server.js");

describe("server.js", () => {
  describe("GET /", () => {
    //
    it("responds w 200 OK", () => {
      return request(server)
        .get("/")
        .then(response => {
          expect(response.status).toBe(200);
        });
    });
    //
    it("responds w 200 OK", () => {
      return request(server)
        .get("/")
        .expect(200);
    });
    //
    it("responds w 200 OK async", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
    //
    it("should return JSON", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });
    //
    it("res 200", done => {
      request(server)
        .get("/")
        .then(response => {
          expect(response.status).toBe(200);
          done();
        });
    });
    //
    it('return {api: "up"}', () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body).toEqual({ api: "up" });
        });
    });
  });
});
