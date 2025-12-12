import get from "../../src/get.js";

describe("get", () => {
  const obj = {
    a: [{ b: { c: 3 } }],
    x: { y: { z: 0 } },
  };

  test("gets by array path", () => {
    expect(get(obj, ["a", "0", "b", "c"])).toBe(3);
  });

  test("gets by string path with dots", () => {
    // nếu lib không hỗ trợ string-path, bạn bỏ test này
    expect(get(obj, "a[0].b.c")).toBe(3);
  });

  test("returns defaultValue when path missing", () => {
    expect(get(obj, "a[0].b.missing", "DEFAULT")).toBe("DEFAULT");
  });

  test("returns undefined when missing and no default", () => {
    expect(get(obj, "not.exists")).toBeUndefined();
  });

  test("handles null object safely", () => {
    // lodash-like: null -> default/undefined, không throw
    expect(get(null, "a.b", "D")).toBe("D");
    expect(get(null, "a.b")).toBeUndefined();
  });
});
