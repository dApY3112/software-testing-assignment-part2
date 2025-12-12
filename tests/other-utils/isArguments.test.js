import isArguments from "../../src/isArguments.js";

describe("isArguments", () => {
  test("returns true for arguments object", () => {
    function f() {
      return arguments;
    }
    expect(isArguments(f(1, 2, 3))).toBe(true);
  });

  test("returns false for array", () => {
    expect(isArguments([1, 2, 3])).toBe(false);
  });

  test("returns false for plain object", () => {
    expect(isArguments({ a: 1 })).toBe(false);
  });

  test("returns false for null", () => {
    expect(isArguments(null)).toBe(false);
  });

  test("returns false for primitive values", () => {
    expect(isArguments(123)).toBe(false);
    expect(isArguments("abc")).toBe(false);
    expect(isArguments(true)).toBe(false);
  });
});
