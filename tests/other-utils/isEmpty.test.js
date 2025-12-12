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

  // 🔹 NEW TESTS BELOW 🔹

  test("Map and Set are checked by size", () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);

    const m = new Map();
    m.set("a", 1);
    expect(isEmpty(m)).toBe(false);

    const s = new Set([1]);
    expect(isEmpty(s)).toBe(false);
  });

  test("arguments object", () => {
    function getArgs() {
      return arguments;
    }

    expect(isEmpty(getArgs())).toBe(true);
    expect(isEmpty(getArgs(1, 2))).toBe(false);
  });

  test("prototype object", () => {
    function Foo() {}
    expect(isEmpty(Foo.prototype)).toBe(true);

    Foo.prototype.a = 1;
    expect(isEmpty(Foo.prototype)).toBe(false);
  });

  test("object with inherited but no own properties is empty", () => {
    const parent = { a: 1 };
    const child = Object.create(parent);

    expect(isEmpty(child)).toBe(true);

    child.b = 2;
    expect(isEmpty(child)).toBe(false);
  });
});
