import toString from "../../src/toString.js";

describe("toString", () => {
  test("returns empty string for null and undefined", () => {
    expect(toString(null)).toBe("");
    expect(toString(undefined)).toBe("");
  });

  test("returns string unchanged", () => {
    expect(toString("abc")).toBe("abc");
  });

  test("converts numbers to string", () => {
    expect(toString(123)).toBe("123");
  });

  test("preserves negative zero", () => {
    expect(toString(-0)).toBe("-0");
  });

  test("converts arrays recursively", () => {
    expect(toString([1, null, 3])).toBe("1,,3");
  });

  test("converts symbol using toString", () => {
    const sym = Symbol("test");
    expect(toString(sym)).toBe("Symbol(test)");
  });
});
