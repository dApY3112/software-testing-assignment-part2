// import isBuffer from "../../src/isBuffer.js";

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

/**
 * @jest-environment node
 */

describe('isBuffer (with real Buffer)', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('returns true for Buffer instances', () => {
    const isBuffer = require('../path/to/isBuffer.js').default;

    expect(isBuffer(Buffer.alloc(2))).toBe(true);
    expect(isBuffer(Buffer.from('abc'))).toBe(true);
  });

  test('returns false for non-buffers', () => {
    const isBuffer = require('../path/to/isBuffer.js').default;

    expect(isBuffer(new Uint8Array(2))).toBe(false);
    expect(isBuffer({})).toBe(false);
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(undefined)).toBe(false);
    expect(isBuffer(123)).toBe(false);
    expect(isBuffer('abc')).toBe(false);
  });
});


// -------------------------------
// Mock environment where Buffer does NOT exist
// -------------------------------

describe('isBuffer (fallback mode, no Buffer)', () => {
  beforeEach(() => {
    jest.resetModules();

    jest.doMock('../path/to/.internal/root.js', () => ({
      default: {} // no Buffer inside
    }));
  });

  test('fallback always returns false', () => {
    const isBuffer = require('../path/to/isBuffer.js').default;

    expect(isBuffer(Buffer.alloc(2))).toBe(false);  // still false because Buffer.isBuffer missing
    expect(isBuffer(new Uint8Array(2))).toBe(false);
    expect(isBuffer('abc')).toBe(false);
  });

  test('nativeIsBuffer is undefined in fallback mode', () => {
    const isBufferModule = require('../path/to/isBuffer.js');
    const root = require('../path/to/.internal/root.js').default;

    expect(root.Buffer).toBeUndefined();
    expect(typeof isBufferModule.nativeIsBuffer).toBe('undefined');
  });
});