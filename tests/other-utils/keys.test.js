import keys from "../../src/keys.js";

describe("keys", () => {
  test("returns keys of plain object", () => {
    expect(keys({ a: 1, b: 2 })).toEqual(["a", "b"]);
  });

  test("ignores inherited properties", () => {
    function Foo() {
      this.a = 1;
    }
    Foo.prototype.b = 2;

    expect(keys(new Foo())).toEqual(["a"]);
  });

  // 🔹 NEW TESTS FOR arrayLike branch 🔹

  test("returns indices for string (array-like)", () => {
    expect(keys("hi")).toEqual(["0", "1"]);
  });

  test("returns indices for array", () => {
    expect(keys([10, 20, 30])).toEqual(["0", "1", "2"]);
  });

  test("returns indices for arguments object", () => {
    function getArgs() {
      return arguments;
    }

    expect(keys(getArgs("a", "b"))).toEqual(["0", "1"]);
  });

    test("returns indices for array-like object with length", () => {
    const obj = { 0: "x", 1: "y", length: 2 };
    expect(keys(obj)).toEqual(["0", "1", "length"]);
    });
});
