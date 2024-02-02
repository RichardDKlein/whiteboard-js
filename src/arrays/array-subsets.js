/**
 * Partitions an array of integers into disjoint subarrays `arrA` and `arrB`
 * such that `arrA` is the smallest possible subarray whose elements sum to a
 * greater number than the elements of `arrB`.
 *
 * The strategy is to first sort the given array in descending order. Then,
 * starting from the first element, keep adding elements to `arrA` until the
 * running total of the elements in `arrA` exceeds the running total of the
 * remaining elements (in `arrB`).
 *
 * Performance is O(n*log(n)), due to the sorting operation.
 *
 * @param {number[]} a The array to be partitioned.
 * @returns {number[]} The subarray `arrA`, whose elements are in ascending
 * order.
 */
export function arraySubsets(a) {
  const result = [];
  if (a === null || a.length === 0) {
    return result;
  }
  a.sort((x, y) => y - x);
  let sumA = 0;
  let sumB = a.reduce((total, num) => total + num, 0);
  for (const n of a) {
    result.push(n);
    sumA += n;
    sumB -= n;
    if (sumA > sumB) {
      break;
    }
  }
  result.sort((x, y) => x - y);
  return result;
}
