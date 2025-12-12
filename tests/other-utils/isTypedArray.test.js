// import isTypedArray from "../../src/isTypedArray.js";

// describe("isTypedArray", () => {
//   test("returns true for typed arrays", () => {
//     expect(isTypedArray(new Uint8Array())).toBe(true);
//     expect(isTypedArray(new Int16Array())).toBe(true);
//     expect(isTypedArray(new Float32Array())).toBe(true);
//   });

//   test("returns false for non-typed arrays", () => {
//     expect(isTypedArray([])).toBe(false);
//     expect(isTypedArray({})).toBe(false);
//     expect(isTypedArray("abc")).toBe(false);
//     expect(isTypedArray(null)).toBe(false);
//   });
// });

import { expect } from 'chai';
import castArray from "../src/castArray.js";

describe('castArray()', () => {
    const testCases = [
        { 
            args: 1,
            expected: [1],
            description: 'array from a number'
        },
        {
            args: 'abc',
            expected: ['abc'],
            description: 'array from a string'
        },
        {
            args: true,
            expected: [true],
            description: 'array from a boolean'
        },
        {
            args: { a: 1 },
            expected: [{ a: 1 }],
            description: 'array from a object'
        },
        {
            args: [1, 2, 3],
            expected: [1, 2, 3],
            description: 'the given array so that it stays the same as original array',
        },
        {
            args: null,
            expected: [null],
            description: 'array from a null value'
        },
        {
            args: undefined,
            expected: [undefined],
            description: 'array from an undefined value'
        },
        {
            args: [],
            expected: [],
            description: 'empty array'
        },
        {
            args: [[[],[]]],
            expected: [[[],[]]],
            description: 'empty nested array'
        },
        {
            // args: no arguments passed
            expected: [undefined],
            description: 'array of undefined, when no arguments passed'
        }    
    ];

    testCases.forEach(({ args, expected, description }) => {
        it(`should cast ${description} correctly`, () => {
            const result = castArray(args);
            expect(result).to.deep.equal(expected);
        });
    });

    it('should handle no arguments', () => {
        const result = castArray();
        expect(result).to.deep.equal([undefined]);
    });
});