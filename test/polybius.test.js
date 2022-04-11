const { expect } = require("chai");
const { polybius } = require("../src/polybius");


describe("polybius() submission tests by Haedon", () => {
  describe("simple encode with Hello There", () => {
    it("should encode by reading numbered pairs", () => {
      const message = "Hello There";
      const actual = polybius(message);
      const expected = "3251131343 4432512451"
      expect(actual).to.equal(expected);
    });
  });
  describe("test for false", () => {
    it("should return false if length is odd", () => {
      const message = "15121425 485414342";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});
