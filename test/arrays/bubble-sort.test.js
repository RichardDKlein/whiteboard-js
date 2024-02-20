import assert from "assert";
import { bubbleSort } from "../../src/arrays/bubble-sort.js";

describe("BubbleSortTest", () => {
  before(() => {
    console.log();
    console.log("Test BubbleSort:");
    console.log("================");
  });

  it("arrayWithOneElement", () => {
    const a = [1];
    const expected = [1];
    doTest(a, expected);
  });

  it("alreadySortedArray", () => {
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    doTest(a, expected);
  });

  it("worstCase", () => {
    const a = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    doTest(a, expected);
  });

  it("averageCase1", () => {
    const a = [2, 1, 4, 3, 6, 5, 8, 7, 10, 9];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    doTest(a, expected);
  });

  it("averageCase2", () => {
    const a = [4, 2, 3, 1, 7, 5, 10, 9, 8, 6];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    doTest(a, expected);
  });

  function doTest(a, expected) {
    const aCopy = [...a];
    bubbleSort(aCopy);
    assert.deepStrictEqual(aCopy, expected);
    console.log(`bubbleSort([${a}]) = [${aCopy}]`);
  }
});
