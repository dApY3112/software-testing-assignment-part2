import memoize from "../../src/memoize.js";

describe("memoize", () => {
  test("memoizes function results", () => {
    const fn = jest.fn((x) => x * 2);
    const memoized = memoize(fn);

    expect(memoized(2)).toBe(4);
    expect(memoized(2)).toBe(4);
    expect(fn).toHaveBeenCalledTimes(1); // cache hit
  });

  test("uses resolver to generate cache key", () => {
    const fn = jest.fn((a, b) => a + b);
    const resolver = (a, b) => `${a}-${b}`;
    const memoized = memoize(fn, resolver);

    expect(memoized(1, 2)).toBe(3);
    expect(memoized(1, 2)).toBe(3);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("cache.has branch is executed", () => {
    const fn = jest.fn((x) => x);
    const memoized = memoize(fn);

    memoized(1);
    memoized(1); // hits cache.has(key)

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("throws error if func is not a function", () => {
    expect(() => memoize(123)).toThrow(TypeError);
  });

  test("throws error if resolver is not a function", () => {
    expect(() => memoize(() => {}, 123)).toThrow(TypeError);
  });

  test("uses custom cache constructor", () => {
    memoize.Cache = WeakMap;

    const fn = (x) => x;
    const memoized = memoize(fn);

    expect(memoized.cache).toBeInstanceOf(WeakMap);

    // restore
    memoize.Cache = Map;
  });
});
