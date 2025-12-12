import add from "../../src/add.js";

describe("add – AI-generated tests", () => {
  test("adds two positive integers", () => {
    expect(add(10, 5)).toBe(15);
  });

  test("adds negative numbers", () => {
    expect(add(-10, -5)).toBe(-15);
  });

  test("mix of positive and negative", () => {
    expect(add(10, -7)).toBe(3);
  });

  test("handles zero", () => {
    expect(add(0, 5)).toBe(5);
    expect(add(5, 0)).toBe(5);
  });

  test("floating point addition (close to)", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5);
  });

    test("string numeric inputs result in string concatenation (implementation-specific)", () => {
    const res = add("2", 3);
    expect(res).toBe("23");
    });

  test("NaN propagates", () => {
    expect(Number.isNaN(add(NaN, 1))).toBe(true);
  });
});
