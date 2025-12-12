import capitalize from "../../src/capitalize.js";

describe("capitalize – AI-generated tests", () => {
  test("capitalizes a lowercase word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("keeps remaining characters lowercase (common behavior)", () => {
    expect(capitalize("hELLO")).toBe("Hello");
  });

  test("handles empty string", () => {
    expect(capitalize("")).toBe("");
  });

  test("single character", () => {
    expect(capitalize("a")).toBe("A");
  });

  test("string with leading whitespace (implementation dependent)", () => {
    // Một số libs sẽ giữ khoảng trắng: " hello" -> " hello"
    // Một số libs sẽ capitalize ký tự đầu tiên không phải space (không chắc).
    // Ở đây ta assert hành vi phổ biến: giữ nguyên space và không thay đổi.
    expect(capitalize(" hello")).toBe(" hello");
  });

  test("numeric input is coerced to string", () => {
    expect(capitalize(123)).toBe("123");
  });

  test("array input is coerced to string", () => {
    expect(capitalize(["hello"])).toBe("Hello");
  });
});
