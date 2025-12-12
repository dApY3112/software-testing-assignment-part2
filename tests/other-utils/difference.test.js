import difference from "../../src/difference.js";

describe("difference", () => {
  test("basic difference", () => {
    expect(difference([2, 1], [2, 3])).toEqual([1]);
  });

  test("works with multiple arrays to exclude", () => {
    expect(difference([1, 2, 3, 4], [2], [3, 10])).toEqual([1, 4]);
  });

  test("no values removed returns same values", () => {
    expect(difference([1, 2, 3], [4, 5])).toEqual([1, 2, 3]);
  });

  test("empty first array -> empty", () => {
    expect(difference([], [1, 2])).toEqual([]);
  });

  test("handles duplicates in first array", () => {
    expect(difference([1, 2, 2, 3], [2])).toEqual([1, 3]);
  });
});
