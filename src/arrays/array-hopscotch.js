/**
 * Play a game of "array hopscotch".
 *
 * The game is played as follows. Given an array 'a'
 * containing integers greater than or equal to zero,
 * and a starting index 'i', hop left and right in the
 * array by the distance contained in a[i]. Then repeat
 * the process for the new elements you land on.
 *
 * Continue in this manner until you either land on a
 * zero element (i.e. you win the game), or you realize
 * that it is not possible to land on a zero element
 * (i.e. you lose the game).
 *
 * We shall use a recursive algorithm to play the game,
 * keeping track of elements we have visited. If we land
 * on a zero, we win. If, regardless of whether we hop
 * left or right, we land on an element we have already
 * visited, then we are stuck in an infinite loop, and
 * we lose.
 *
 * Since each element in the array is visited at most
 * once, the execution time is O(n), worst case.
 *
 * @param {number[]} a The array in which to play hopscotch.
 * @param {number} iStart The starting index.
 * @returns {number[]} An array containing a winning
 * sequence of indices if one exists, otherwise an empty
 * array.
 */
export function arrayHopscotch(a, iStart) {
  const visited = new Set();
  return arrayHopscotchWithLoopDetection(a, iStart, visited);
}

function arrayHopscotchWithLoopDetection(a, iStart, visited) {
  const result = [];
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
  // base case
  const hop = a[iStart];
  if (hop === 0) {
    result.push(iStart);
    return result;
  }
  // recursive step
  visited.add(iStart);
  const iHopLeft = iStart - hop;
  if (iHopLeft >= 0 && !visited.has(iHopLeft)) {
    const remainingHops = arrayHopscotchWithLoopDetection(a, iHopLeft, visited);
    if (remainingHops.length > 0) {
      result.push(iStart);
      result.push(...remainingHops);
      return result;
    }
  }
  const iHopRight = iStart + hop;
  if (iHopRight < a.length && !visited.has(iHopRight)) {
    const remainingHops = arrayHopscotchWithLoopDetection(
      a,
      iHopRight,
      visited
    );
    if (remainingHops.length > 0) {
      result.push(iStart);
      result.push(...remainingHops);
      return result;
    }
  }
  // no solution
  return [];
}
