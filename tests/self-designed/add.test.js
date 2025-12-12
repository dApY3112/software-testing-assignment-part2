import add from "../../src/add.js";

describe("add – self-designed", () => {
  test("add(1,2) -> 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("float close", () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5);
  });
});
