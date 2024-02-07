/**
 * Sort an array using the bubble sort algorithm.
 * Performance is O(n*n).
 *
 * The algorithm is optimized to avoid re-examining
 * the already sorted elements that "sink" to the
 * bottom of the array during each iteration of the
 * bubble sort.
 *
 * @param {[number]} a The array to be sorted. It
 * will be sorted in place.
 * @returns {void}
 */
export function bubbleSort(a) {
  let lastUnsortedIndex = a.length - 1;
  while (lastUnsortedIndex > 0) {
    let swapOccurred = false;
    let lastUnsortedIndexThisIteration = lastUnsortedIndex;
    for (let i = 0; i < lastUnsortedIndex; i++) {
      if (a[i] > a[i + 1]) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
        swapOccurred = true;
        lastUnsortedIndexThisIteration = i;
      }
    }
    if (!swapOccurred) {
      break;
    }
    lastUnsortedIndex = lastUnsortedIndexThisIteration;
  }
}
