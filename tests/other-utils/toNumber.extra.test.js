import toNumber from "../../src/toNumber.js";

describe("toNumber - extra branch coverage", () => {
  test("returns number as-is", () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  test("symbol returns NaN", () => {
    expect(Number.isNaN(toNumber(Symbol("x")))).toBe(true);
  });

  test("object with valueOf returning primitive", () => {
    const obj = { valueOf: () => 42 };
    expect(toNumber(obj)).toBe(42);
  });

test("object with valueOf returning object -> forces `${other}` branch", () => {
  const other = Object.create(null);
  other.toString = () => "7";

  const obj = {
    valueOf: () => other, // other là object => isObject(other) === true
  };

  expect(toNumber(obj)).toBe(7);
});


  test("non-string non-number conversion uses unary plus", () => {
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
    expect(toNumber(null)).toBe(0);
    expect(Number.isNaN(toNumber(undefined))).toBe(true);
  });

  test("preserves -0 when value === 0 branch", () => {
    expect(Object.is(toNumber(-0), -0)).toBe(true);
  });

  test("trims whitespace in strings", () => {
    expect(toNumber("  3.2  ")).toBe(3.2);
  });

  test("parses binary strings 0b..", () => {
    expect(toNumber("0b1010")).toBe(10);
    expect(toNumber("  0b11 ")).toBe(3);
  });

  test("parses octal strings 0o..", () => {
    expect(toNumber("0o10")).toBe(8);
    expect(toNumber(" 0o7 ")).toBe(7);
  });

  test("bad signed hex like -0x.. returns NaN", () => {
    expect(Number.isNaN(toNumber("-0x1"))).toBe(true);
    expect(Number.isNaN(toNumber("+0x1"))).toBe(true);
  });

  test("good hex without sign uses unary + (JS supports 0x..)", () => {
    expect(toNumber("0x10")).toBe(16);
  });
  test("object with valueOf returning string number", () => {
  const obj = {
    valueOf: () => "8",
  };

  expect(toNumber(obj)).toBe(8);
});
});
