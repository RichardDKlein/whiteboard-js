import assert from "assert";
import { CircularQueue } from "../../src/arrays/circular-queue.js";

describe("CircularQueue", () => {
  let queue;

  beforeEach(() => {
    console.log("\nCreating a CircularQueue that can hold 10 elements");
    queue = new CircularQueue(10);
  });

  it("addAndRemove", () => {
    // add five elements
    console.log();
    assert(add(1));
    assert(add(2));
    assert(add(3));
    assert(add(4));
    assert(add(5));

    // remove three elements
    console.log();
    for (let i = 0; i < 3; ++i) {
      const element = remove();
      assert(element === i + 1);
    }

    // add five more elements
    console.log();
    assert(add(6));
    assert(add(7));
    assert(add(8));
    assert(add(9));
    assert(add(10));

    // remove two more elements
    console.log();
    for (let i = 0; i < 2; ++i) {
      const element = remove();
      assert(element === i + 4);
    }

    // add five more elements
    console.log();
    assert(add(11));
    assert(add(12));
    assert(add(13));
    assert(add(14));
    assert(add(15));

    // try to add one more element (should fail -- queue full)
    console.log();
    assert(!add(16));

    // remove three more elements
    console.log();
    for (let i = 0; i < 3; ++i) {
      const element = remove();
      assert(element === i + 6);
    }

    // add three more elements
    console.log();
    assert(add(17));
    assert(add(18));
    assert(add(19));

    // try to add one more element (should fail -- queue full)
    console.log();
    assert(!add(20));

    // remove seven elements
    console.log();
    for (let i = 0; i < 7; i++) {
      const element = remove();
      assert(element === i + 9);
    }

    // remove three more elements
    console.log();
    for (let i = 0; i < 3; i++) {
      const element = remove();
      assert(element === i + 17);
    }

    // try to remove another element (should fail - queue empty)
    console.log();
    const element = remove();
    assert(element === null);
  });

  function add(element) {
    const success = queue.add(element);
    const outcome = success ? "success" : "FAILED (queue full)";
    console.log(`Adding element ${element} ... ${outcome}`);
    return success;
  }

  function remove() {
    const result = queue.poll();
    const outcome = result == null ? "FAILED (queue empty)" : `${result}`;
    console.log(`Removing element ${outcome}`);
    return result;
  }
});
