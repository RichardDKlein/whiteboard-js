import assert from "assert";
import { arrayHopscotch } from "../../src/arrays/array-hopscotch.js";

describe("ArrayHopscotch", () => {
  before(() => {
    console.log();
    console.log("Test ArrayHopscotch:");
    console.log("===================");
  });

  it("tests an empty array", () => {
    const a = [];
    const iStart = 0;
    const expected = new Set();
    doTest(a, iStart, expected);
  });

  it("tests a start index that is too small", () => {
    const a = [2, 3, 1, 0, 5];
    const iStart = -1;
    const expected = new Set();
    doTest(a, iStart, expected);
  });

  it("tests a start index that is too big", () => {
    const a = [2, 3, 1, 0, 5];
    const iStart = 5;
    const expected = new Set();
    doTest(a, iStart, expected);
  });

  it("tests a case where a solution exists (example 1)", () => {
    const a = [2, 3, 1, 0, 5];
    const iStart = 0;
    const expected = new Set([[0, 2, 3]]);
    doTest(a, iStart, expected);
  });

  it("tests a case where a solution exists (example 2)", () => {
    const a = [2, 2, 2, 0, 0];
    const iStart = 0;
    const expected = new Set([[0, 2, 4]]);
    doTest(a, iStart, expected);
  });

  it("tests a case where a solution exists (example 3)", () => {
    const a = [1, 1, 1, 3, 1, 2, 0, 3];
    const iStart = 5;
    const expected = new Set([
      [5, 3, 6],
      [5, 7, 4, 3, 6],
    ]);
    doTest(a, iStart, expected);
  });

  it("tests a case where a solution exists (example 4)", () => {
    const a = [4, 2, 0, 3, 1, 5, 0];
    const iStart = 0;
    const expected = new Set([[0, 4, 3, 6]]);
    doTest(a, iStart, expected);
  });

  it("tests a case where a solution exists (example 5)", () => {
    const a = [5, 2, 1, 3, 0, 1, 2, 4, 1];
    const iStart = 3;
    const expected = new Set([
      [3, 0, 5, 4],
      [3, 0, 5, 6, 4],
      [3, 6, 4],
    ]);
    doTest(a, iStart, expected);
  });

  it("tests a case where no solution exists", () => {
    const a = [2, 2, 2, 0, 2];
    const iStart = 0;
    const expected = new Set();
    doTest(a, iStart, expected);
  });

  function doTest(a, iStart, expected) {
    const actual = arrayHopscotch(a, iStart);
    assert(areSetsEqual(expected, actual));
    console.log(`${a}, start = ${iStart}`);
    console.log("Winning hops:");
    printPaths(actual);
  }

  function areSetsEqual(set1, set2) {
    if (set1.size !== set2.size) {
      return false;
    }
    const array1 = Array.from(set1).sort();
    const array2 = Array.from(set2).sort();
    console.log(JSON.stringify(array1));
    return JSON.stringify(array1) === JSON.stringify(array2);
  }

  function printPaths(paths) {
    console.log("{");
    paths.forEach((path) => {
      console.log(`\t[${path.join(", ")}]`);
    });
    console.log("}");
  }
});
