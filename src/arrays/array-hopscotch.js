/**
 * <p>Play a game of "array hopscotch".</p>
 *
 * <p>The game is played as follows. Given an array 'a' containing
 * integers greater than or equal to zero, and a starting index 'iStart',
 * hop left or right in the array by the distance contained in a[iStart].
 * Then repeat the hopping process for the new element you land on: Hop
 * left or right by the distance contained in that new element.
 *
 * There are two important restrictions on the hopping process:
 *
 * (1) If a hop would take you beyond the bounds of the array, that is
 * not a legal hop; and
 *
 * (2) If a hop would take you to an element you have already visited,
 * that is not a legal hop.</p>
 *
 * <p>Continue in this manner until you either land on a zero element
 * (i.e., you win the game), or you land on an element from which there
 * are no legal hops (i.e., you lose the game).</p>
 *
 * <p>The goal of the game is to find not just one winning path, but all
 * possible winning paths.</p>
 *
 * <p>Since there are at most `n` indices in each winning path, where `n`
 * is the length of the array, and since there are only `k` winning paths,
 * the execution time is O(k * n) = O(n), worst case.</p>
 *
 * @param {number[]} a The array in which we are to play our game of array
 * hopscotch.
 * @param {number} iStart The starting index for our game.
 * @returns {Set<number[]>} A Set containing all the winning paths. Each
 * winning path is an array containing a sequence of unique hop indices
 * that lead to a zero element. Note that the first element of a winning
 * tuple must be `i_start`, and the last element must be the index of a
 * zero element in `a`. If there are no winning paths, then the Set will
 * be empty.)
 */
export function arrayHopscotch(a, iStart) {
  return _helper(a, iStart, new Set());
}

/**
 * Helper function to perform loop detection.
 *
 * @private
 * @param {number[]} a (Same as in main function.)
 * @param {number} iStart (Same as in main function.)
 * @param {Set<number>} visited A Set of indices that have already been
 * visited during our game of array hopscotch. Do not continue to explore
 * any paths that land on any of these indices.
 * @returns {Set<number[]>} (Same as in main function.)
 */
function _helper(a, iStart, visited) {
  const result = new Set();
  // error checking
  if (
    a === null ||
    a === undefined ||
    !Array.isArray(a) ||
    iStart < 0 ||
    iStart >= a.length ||
    a[iStart] < 0
  ) {
    return result;
  }
  // loop detection
  if (visited.has(iStart)) {
    return result;
  }
  // base case
  if (a[iStart] === 0) {
    return result.add([iStart]);
  }
  // recursive step
  visited.add(iStart); // don't revisit starting index
  for (const iHop of [iStart - a[iStart], iStart + a[iStart]]) {
    const remainingPaths = _helper(a, iHop, visited);
    for (const path of remainingPaths) {
      path.unshift(iStart);
      result.add(path);
    }
  }
  visited.delete(iStart); // ok to revisit starting index
  return result;
}
