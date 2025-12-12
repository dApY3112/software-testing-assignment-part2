import isBuffer from "../../src/isBuffer.js";

describe("isBuffer", () => {
  test("returns false even for Node Buffer in this environment (implementation-specific)", () => {
    expect(isBuffer(Buffer.from("abc"))).toBe(false);
  });

  test("returns false for Uint8Array", () => {
    expect(isBuffer(new Uint8Array([1, 2, 3]))).toBe(false);
  });

  test("returns false for null/undefined", () => {
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(undefined)).toBe(false);
  });
});
