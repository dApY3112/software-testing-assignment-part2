import isEmpty from "../../src/isEmpty.js";

describe("isEmpty", () => {
  test("empty array", () => {
    expect(isEmpty([])).toBe(true);
  });

  test("non-empty array", () => {
    expect(isEmpty([1])).toBe(false);
  });

  test("empty object", () => {
    expect(isEmpty({})).toBe(true);
  });

  test("non-empty object", () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test("string cases", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty("a")).toBe(false);
  });

  test("null/undefined treated as empty", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });
});
