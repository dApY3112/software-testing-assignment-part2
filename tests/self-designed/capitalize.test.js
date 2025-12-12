import capitalize from "../../src/capitalize.js";

describe("capitalize – self-designed", () => {
  test('"hello" -> "Hello"', () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("number coercion", () => {
    expect(capitalize(123)).toBe("123");
  });
});
