import slice from "../../src/slice.js";

describe("slice", () => {
  test("returns [] when array is null/undefined/empty", () => {
    expect(slice(null, 0, 2)).toEqual([]);
    expect(slice(undefined, 0, 2)).toEqual([]);
    expect(slice([], 0, 2)).toEqual([]);
  });

  test("start default = 0 when start is null/undefined", () => {
    // cover line 26: start == null ? 0 : start
    expect(slice([1, 2, 3], undefined, 2)).toEqual([1, 2]);
    expect(slice([1, 2, 3], null, 2)).toEqual([1, 2]);
  });

  test("end default = length when end is undefined", () => {
    // cover line 27: end === undefined ? length : end
    expect(slice([1, 2, 3, 4], 2)).toEqual([3, 4]);
  });

  test("handles negative start", () => {
    expect(slice([1, 2, 3, 4], -2)).toEqual([3, 4]);
  });

  test("handles negative end", () => {
    // cover line 32-34
    expect(slice([1, 2, 3, 4], 0, -1)).toEqual([1, 2, 3]);
    expect(slice([1, 2, 3, 4], 1, -1)).toEqual([2, 3]);
  });

  test("start greater than end returns []", () => {
    // cover line 35: start > end ? 0 : ...
    expect(slice([1, 2, 3, 4], 3, 1)).toEqual([]);
  });
});
