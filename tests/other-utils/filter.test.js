import filter from "../../src/filter.js";

describe("filter", () => {
  test("filters with predicate", () => {
    const res = filter([1, 2, 3, 4], (n) => n % 2 === 0);
    expect(res).toEqual([2, 4]);
  });

  test("filters objects by field", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    const res = filter(users, (u) => u.active);
    expect(res).toEqual([{ user: "barney", active: true }]);
  });

  test("empty collection returns array containing empty array", () => {
    expect(filter([], (x) => x)).toEqual([[]]);
  });


    test("predicate always false returns array containing empty array", () => {
    expect(filter([1, 2, 3], () => false)).toEqual([[]]);
  });

  test("handles null/undefined collection as array containing empty array", () => {
    expect(filter(null, () => true)).toEqual([[]]);
    expect(filter(undefined, () => true)).toEqual([[]]);
  });
});
