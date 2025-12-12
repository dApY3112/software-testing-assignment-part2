import toNumber from "../../src/toNumber.js";

describe("toNumber", () => {
  test("number stays number", () => {
    expect(toNumber(3.2)).toBe(3.2);
  });

  test("numeric string converts", () => {
    expect(toNumber("3.2")).toBe(3.2);
  });

  test("whitespace string converts", () => {
    expect(toNumber("  8  ")).toBe(8);
  });

  test("binary/octal/hex strings (lodash-like)", () => {
    // nếu lib không hỗ trợ, bạn có thể bỏ riêng từng case fail
    expect(toNumber("0b1010")).toBe(10);
    expect(toNumber("0o10")).toBe(8);
    expect(toNumber("0x10")).toBe(16);
  });

  test("invalid string becomes NaN", () => {
    expect(Number.isNaN(toNumber("abc"))).toBe(true);
  });

  test("null/undefined", () => {
    // lodash: toNumber(null) -> 0, toNumber(undefined) -> NaN
    // nếu lib khác, chỉnh theo behavior thật
    expect(toNumber(null)).toBe(0);
    expect(Number.isNaN(toNumber(undefined))).toBe(true);
  });
});
