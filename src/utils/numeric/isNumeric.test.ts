import { isNumeric } from "./isNumeric";

describe("isNumeric", () => {
  it("should return true for a numeric string", () => {
    expect(isNumeric("123")).toBe(true);
  });

  it("should return true for a negative numeric string", () => {
    expect(isNumeric("-123")).toBe(true);
  });

  it("should return false for a non-numeric string", () => {
    expect(isNumeric("abc")).toBe(false);
  });

  it("should return false for a non-numeric string even if it starts with number", () => {
    expect(isNumeric("123abc")).toBe(false);
  });
});
