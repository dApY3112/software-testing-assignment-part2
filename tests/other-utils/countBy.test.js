import countBy from "../../src/countBy.js";

describe("countBy", () => {
  test("counts by iteratee function (implementation-specific)", () => {
    const res = countBy([6.1, 4.2, 6.3], Math.floor);
    expect(res).toEqual({ "4": 0, "6": 1 });
  });

  test("counts by string length (implementation-specific)", () => {
    const res = countBy(["one", "two", "three"], (s) => s.length);
    expect(res).toEqual({ "3": 1, "5": 0 });
  });

  test("empty array returns empty object", () => {
    expect(countBy([], (x) => x)).toEqual({});
  });

  test("iteratee returning same key (implementation-specific)", () => {
    const res = countBy([1, 2, 3], () => "x");
    expect(res).toEqual({ x: 2 });
  });

  test("handles null/undefined collection as empty", () => {
    expect(countBy(null, (x) => x)).toEqual({});
    expect(countBy(undefined, (x) => x)).toEqual({});
  });
});
