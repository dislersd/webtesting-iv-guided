const db = require("../data/dbConfig.js");
const Hobbits = require("./hobbitsModel.js");
// returns 201
// returns created resource

describe("hobbits model", () => {
  beforeEach( async () => {
    await db('hobbits').truncate();
  })
  describe("", () => {
    it("should insert provided hobbit", async () => {
      await Hobbits.insert({ name: "gaffer" });
      await Hobbits.insert({ name: "aragorn" });
      await Hobbits.insert({ name: "gandalf" });

      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(3);
    });
    it("should insert provided hobbit", async () => {
      let hobbit = await Hobbits.insert({ name: "gaffer" });
      expect(hobbit.name).toBe("gaffer");
      hobbit = await Hobbits.insert({ name: "sam" });
      expect(hobbit.name).toBe('sam')
    });
  });
});
