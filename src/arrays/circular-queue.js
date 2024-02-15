/**
 * Implement a queue using a circular buffer.
 *
 * We keep two private indices, head and tail. The head
 * points to the element at the head of the queue. The
 * tail points to the next free slot at the end of the
 * queue. The tail and head chase each other around the
 * circular buffer as elements are added and removed.
 *
 * The queue is considered empty when the head and the tail
 * point to the same element. The queue is considered full
 * when the next element after the tail is the head. Since
 * the tail always points to the next free slot, a full queue
 * contains exactly one free, and unusable, slot. Thus, if we
 * want a queue that can hold `capacity` elements, we need to
 * allocate a buffer of length (capacity + 1).
 */
export class CircularQueue {
  constructor(capacity) {
    /** @private */
    this.buf = new Array(capacity + 1);
    /** @private */
    this.head = 0;
    /** @private */
    this.tail = 0;
  }

  /**
   * Append an element to the queue.
   *
   * @param {number} element The element to be appended.
   * @returns {boolean} true if the append operation was successful,
   * false otherwise.
   */
  add(element) {
    if (this.isFull()) {
      return false;
    }
    this.buf[this.tail] = element;
    this.tail = (this.tail + 1) % this.buf.length;
    return true;
  }

  /**
   * Remove an element from the front of the queue.
   *
   * @returns {number|null} The element that was removed from the
   * front of the queue, or null if the queue is empty.
   */
  poll() {
    if (this.isEmpty()) {
      return null;
    }
    const element = this.buf[this.head];
    this.buf[this.head] = undefined;
    this.head = (this.head + 1) % this.buf.length;
    return element;
  }

  /**
   * @private
   * Determine whether the queue is full.
   *
   * @returns {boolean} true if the queue is full, false otherwise.
   */
  isFull() {
    return (this.tail + 1) % this.buf.length === this.head;
  }

  /**
   * @private
   * Determine whether the queue is empty.
   *
   * @returns {boolean} true if the queue is empty, false otherwise.
   */
  isEmpty() {
    return this.head === this.tail;
  }
}
