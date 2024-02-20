import assert from "assert";
import { arraySubsets } from "../../src/arrays/array-subsets.js";

describe("ArraySubsetsTest", () => {
  before(() => {
    console.log();
    console.log("Test array-subsets:");
    console.log("===================");
  });

  it("tests a null array", () => {
    const a = null;
    const expected = [];
    doTest(a, expected);
  });

  it("tests an empty array", () => {
    const a = [];
    const expected = [];
    doTest(a, expected);
  });

  it("tests an array having a single element", () => {
    const a = [1];
    const expected = [1];
    doTest(a, expected);
  });

  it("tests an array having no duplicate elements", () => {
    const a = [1, 2, 3, 4];
    const expected = [3, 4];
    doTest(a, expected);
  });

  it("tests a longer array having no duplicate elements", () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [7, 8, 9, 10];
    doTest(a, expected);
  });

  it("tests an array with some duplicate elements", () => {
    const a = [1, 2, 2, 3, 3, 3, 4];
    const expected = [3, 3, 4];
    doTest(a, expected);
  });

  it("tests an array with all duplicate elements", () => {
    const a = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    const expected = [1, 1, 1, 1, 1, 1];
    doTest(a, expected);
  });

  function doTest(a, expected) {
    const actual = arraySubsets(a);
    assert.deepStrictEqual(actual, expected);
    console.log(`a = [${a}], arrA = [${actual}]`);
  }
});
