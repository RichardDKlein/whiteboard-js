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
  let numberOfUnsortedElements = a.length;
  while (numberOfUnsortedElements > 0) {
    let newNumberOfUnsortedElements = 0;
    for (let i = 0; i < numberOfUnsortedElements - 1; i++) {
      if (a[i] > a[i + 1]) {
        [a[i], a[i + 1]] = [a[i + 1], a[i]];
        newNumberOfUnsortedElements = i + 1;
      }
    }
    numberOfUnsortedElements = newNumberOfUnsortedElements;
  }
}
