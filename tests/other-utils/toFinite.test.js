import toFinite from "../../src/toFinite.js";

describe("toFinite", () => {
  test("returns finite number for normal numbers", () => {
    expect(toFinite(3.2)).toBe(3.2);
    expect(toFinite("3.2")).toBe(3.2);
  });

  test("handles zero correctly", () => {
    expect(toFinite(0)).toBe(0);
    expect(toFinite(-0)).toBe(-0);
  });

  test("returns 0 for null, undefined, false", () => {
    expect(toFinite(null)).toBe(0);
    expect(toFinite(undefined)).toBe(0);
    expect(toFinite(false)).toBe(0);
  });

  test("converts Infinity to MAX_INTEGER", () => {
    const MAX_INTEGER = 1.7976931348623157e+308;
    expect(toFinite(Infinity)).toBe(MAX_INTEGER);
  });

  test("converts -Infinity to -MAX_INTEGER", () => {
    const MAX_INTEGER = 1.7976931348623157e+308;
    expect(toFinite(-Infinity)).toBe(-MAX_INTEGER);
  });

  test("returns 0 for NaN", () => {
    expect(toFinite(NaN)).toBe(0);
  });
});
