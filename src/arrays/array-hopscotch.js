/**
 * Play a game of "array hopscotch".
 *
 * <p>The game is played as follows. Given an array 'a'
 * containing integers greater than or equal to zero,
 * and a starting index 'iStart', hop left and right in the
 * array by the distance contained in a[iStart]. Then repeat
 * the process for the new elements you land on.</p>
 *
 * <p>Continue in this manner until you either land on a
 * zero element (i.e. you win the game), or you realize
 * that it is not possible to land on a zero element
 * (i.e. you lose the game).</p>
 *
 * <p>We shall use a recursive algorithm to play the game,
 * keeping track of elements we have visited. If we land
 * on a zero, we win. If, regardless of whether we hop
 * left or right, we land on an element we have already
 * visited, then we are stuck in an infinite loop, and
 * we lose.</p>
 *
 * <p>Since each element in the array is visited at most
 * once, the execution time is O(n), worst case.</p>
 *
 * @param {number[]} a The array in which we are to play
 * "array hopscotch".
 * @param {number} iStart The starting index for our game
 * of hopscotch.
 * @returns {Set<number[]>} A Set containing all the winning
 * paths. Each winning path is an array containing a sequence
 * of hop indices that lead to a zero element. (If there are
 * no winning paths, then the Set will be empty.)
 */
export function arrayHopscotch(a, iStart) {
  return _helper(a, iStart, new Set());
}

/**
 * Helper function to perform loop detection.
 *
 * @private
 * @param {number[]} a The array in which we are to play
 * our game of array hopscotch.
 * @param {number} iStart The starting index for our game/
 * @param {Set<number>} visited A Set of indices that have
 * already been visited during our game. Do not continue to
 * explore any paths that land on any of these indices.
 * @returns {Set<number[]>} A Set containing all the winning
 * paths. Each winning path is an array containing a sequence
 * of hop indices that lead to a zero element. (If there are
 * no winning paths, then the Set will be empty.)
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
    const path = [iStart];
    result.add(path);
    return result;
  }
  // recursive step
  visited.add(iStart); // don't revisit starting index
  for (let iHop of [iStart - a[iStart], iStart + a[iStart]]) {
    const remainingPaths = _helper(a, iHop, visited);
    for (let path of remainingPaths) {
      path.unshift(iStart);
      result.add(path);
    }
  }
  visited.delete(iStart); // ok to revisit starting index
  return result;
}
