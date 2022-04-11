const { expect } = require("chai");
const { substitution } = require("../src/substitution");


describe("substitution() submission tests by Haedon", () => {
  describe("simple encode with Hello There", () => {
    it("should encode using new alphabet", () => {
      const message = "Hello There";
      const alphabet = "mnbvcxzlkjhgfdsapoiuytrewq";
      const actual = substitution(message, alphabet);
      const expected = "lcggs ulcoc"
      expect(actual).to.equal(expected);
    });
  });
  describe("test for false", () => {
    it("should return false not 26 characters", () => {
      const message = "Hello There";
      const alphabet = "jkhdslfkj";
      const actual = substitution(message, alphabet);

      expect(actual).to.be.false;
    });
  });
});