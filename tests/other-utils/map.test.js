import map from "../../src/map.js";
import { jest } from "@jest/globals";

describe("map", () => {
  test("maps values with iteratee", () => {
    const res = map([4, 8], (n) => n * n);
    expect(res).toEqual([16, 64]);
  });

  test("iteratee receives (value, index, array)", () => {
    const spy = jest.fn((v) => v);
    map([10, 20], spy);

    expect(spy).toHaveBeenCalledWith(10, 0, [10, 20]);
    expect(spy).toHaveBeenCalledWith(20, 1, [10, 20]);
  });

  test("null/undefined treated as empty array", () => {
    expect(map(null, (x) => x)).toEqual([]);
    expect(map(undefined, (x) => x)).toEqual([]);
  });
});
