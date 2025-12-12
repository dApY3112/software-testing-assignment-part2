import drop from "../../src/drop.js";

describe("drop", () => {
  test("drops 1 by default", () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  test("drops n elements", () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });

  test("n = 0 returns original array content", () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test("n larger than length returns empty", () => {
    expect(drop([1, 2, 3], 10)).toEqual([]);
  });

  test("negative n treated as 0 (lodash-like)", () => {
    // nếu lib xử lý khác, chỉnh lại theo behavior thực tế
    expect(drop([1, 2, 3], -2)).toEqual([1, 2, 3]);
  });
});
test("null array returns empty array", () => {
  expect(drop(null)).toEqual([]);
});

test("empty array returns empty array", () => {
  expect(drop([])).toEqual([]);
});