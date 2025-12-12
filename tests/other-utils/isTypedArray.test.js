import isTypedArray from "../../src/isTypedArray.js";

describe("isTypedArray", () => {
  test("returns true for typed arrays", () => {
    expect(isTypedArray(new Uint8Array())).toBe(true);
    expect(isTypedArray(new Int16Array())).toBe(true);
    expect(isTypedArray(new Float32Array())).toBe(true);
  });

  test("returns false for non-typed arrays", () => {
    expect(isTypedArray([])).toBe(false);
    expect(isTypedArray({})).toBe(false);
    expect(isTypedArray("abc")).toBe(false);
    expect(isTypedArray(null)).toBe(false);
  });
});
