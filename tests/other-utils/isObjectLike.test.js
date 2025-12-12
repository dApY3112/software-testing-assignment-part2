import isObjectLike from "../../src/isObjectLike.js";

describe("isObjectLike", () => {
  test("plain object is object-like", () => {
    expect(isObjectLike({})).toBe(true);
  });

  test("array is object-like", () => {
    expect(isObjectLike([1, 2])).toBe(true);
  });

  test("null is not object-like", () => {
    expect(isObjectLike(null)).toBe(false);
  });

  test("function is not object-like", () => {
    expect(isObjectLike(function () {})).toBe(false);
  });

  test("primitives are not object-like", () => {
    expect(isObjectLike(1)).toBe(false);
    expect(isObjectLike("a")).toBe(false);
    expect(isObjectLike(true)).toBe(false);
    expect(isObjectLike(undefined)).toBe(false);
  });
});
