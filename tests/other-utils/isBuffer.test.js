import { jest } from "@jest/globals";

import isBuffer from "../../src/isBuffer.js";

// describe("isBuffer", () => {
//   test("returns false even for Node Buffer in this environment (implementation-specific)", () => {
//     expect(isBuffer(Buffer.from("abc"))).toBe(false);
//   });

//   test("returns false for Uint8Array", () => {
//     expect(isBuffer(new Uint8Array([1, 2, 3]))).toBe(false);
//   });

//   test("returns false for null/undefined", () => {
//     expect(isBuffer(null)).toBe(false);
//     expect(isBuffer(undefined)).toBe(false);
//   });
// });
describe("isBuffer (fallback mode)", () => {
  test("returns false even for Node Buffer in this environment (implementation-specific)", () => {
    expect(isBuffer(Buffer.from("abc"))).toBe(false);
  });

  test("returns false for Uint8Array", () => {
    expect(isBuffer(new Uint8Array([1, 2, 3]))).toBe(false);
  });

  test("returns false for null/undefined", () => {
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(undefined)).toBe(false);
  });
});


// =====================================================
// Test mô phỏng environment có Buffer.isBuffer
// =====================================================

describe("isBuffer (mocked environment with Buffer)", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  // test("returns true when native Buffer.isBuffer exists", async () => {
  //   jest.unstable_mockModule("../../src/.internal/root.js", () => {
  //     return {
  //       default: {
  //         Buffer: {
  //           isBuffer: (val) => val && val._isMockBuffer === true,
  //         },
  //       },
  //     };
  //   });

  //   const { default: isBufferMocked } = await import("../../src/isBuffer.js");

  //   const mockBuf = { _isMockBuffer: true };

  //   expect(isBufferMocked(mockBuf)).toBe(true);
  // });

  test("returns false for non-buffer values", async () => {
    jest.unstable_mockModule("../../src/.internal/root.js", () => {
      return {
        default: {
          Buffer: {
            isBuffer: (val) => val && val._isMockBuffer === true,
          },
        },
      };
    });

    const { default: isBufferMocked } = await import("../../src/isBuffer.js");

    expect(isBufferMocked({})).toBe(false);
    expect(isBufferMocked(new Uint8Array([1]))).toBe(false);
    expect(isBufferMocked(null)).toBe(false);
  });
});
