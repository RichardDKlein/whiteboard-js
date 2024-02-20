/**
 * Determine whether a given positive integer is prime.
 *
 * @param {number} n A positive integer.
 * @returns 'true' if `n` is prime, `false` otherwise.
 */
export function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  const sqrtN = Math.sqrt(n);
  for (let i = 3; i <= sqrtN; i += 2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
