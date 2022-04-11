const { expect } = require("chai");
const { caesar } = require("../src/caesar");


describe("caesar() submission tests by Haedon", () => {
  describe("simple encode with Hello There", () => {
    it("should encode by shifting", () => {
      const message = "Hello There";
      const shift = 6;
      const actual = caesar(message, shift);
      const expected = "nkrru znkxk"
      expect(actual).to.equal(expected);
    });
  });
  describe("test for false", () => {
    it("should return false if greater than 25", () => {
      const message = "Hello There";
      const shift = 28;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });
});

