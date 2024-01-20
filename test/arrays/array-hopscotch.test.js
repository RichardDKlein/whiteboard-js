import assert from "assert";
import { arrayHopscotch } from "../../src/arrays/array-hopscotch.js";

describe("ArrayHopscotch", () => {
  before(() => {
    console.log();
    console.log("Test array-hopscotch:");
    console.log("=====================");
  });

  it("tests an empty array", () => {
    doTest([], 0, []);
  });

  it("tests a start index that is too small", () => {
    doTest([2, 3, 1, 0, 5], -1, []);
  });

  it("tests a start index that is too big", () => {
    doTest([2, 3, 1, 0, 5], 5, []);
  });

  it("tests case 1 where a solution exists", () => {
    doTest([2, 3, 1, 0, 5], 0, [0, 2, 3]);
  });

  it("tests case 2 where a solution exists", () => {
    doTest([2, 2, 2, 0, 0], 0, [0, 2, 4]);
  });

  it("tests case 3 where a solution exists", () => {
    doTest([1, 1, 1, 3, 1, 2, 0, 3], 5, [5, 3, 6]);
  });

  it("tests the case where no solution exists", () => {
    doTest([2, 2, 2, 0, 2], 0, []);
  });

  function doTest(a, iStart, expected) {
    const actual = arrayHopscotch(a, iStart);
    assert.deepEqual(expected, actual);
    console.log(a.toString() + ", start = " + iStart);
    console.log("Winning hops = " + actual);
  }
});