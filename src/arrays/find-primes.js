/**
 * Find all primes up to a given integer.
 *
 * Our algorithm is the Sieve of Eratosthenes. We use an array 'isPrime'
 * to keep track of which integers are prime: `isPrime[i]` = `true` if
 * and only if 'i' is prime.
 *
 * The `isPrime` array is initialized as follows: `isPrime[2]` is set
 * to `true`, since we know that 2 is prime. In addition, `isPrime[i]
 * is set to `true` for all odd `i` > 1, since as far as we know at the
 * outset, all odd integers > 1, as well as 2, are prime. `isPrime[1]`,
 * as well as `isPrime[i] for all even `i` > 2, are set to `false`.
 *
 * We then loop through the odd indices of the `isPrime` array. If
 * `isPrime[i]` is `true`, we mark all multiples of `i` as composite
 * (i.e., non-prime). We do this by setting `isPrime[m * i]` to `false`
 * for each multiple of `i`. Here, we take advantage of the following
 * optimization: We need not start from `m` = 2; instead, we can start
 * from `m` = `i`.
 *
 * To see why this is true, suppose that `m < i`. Now, `m` has a prime
 * factorization `p1 * p2 * ... * pN`, where `pI <= m < i` for each of
 * the prime factors `pI`. In particular, `p1 < i`. But that means that
 * `isPrime[m * i]` = `isPrime[p1 * (p2 * ... * pN * i)]` has ALREADY
 * been set to `true`. Why? Because, earlier in the loop through the
 * `isPrime` array, we found that `p1` was prime, and therefore we
 * marked all multiples of `p1` as composite.
 *
 * @param {number} n A positive integer.
 * @return {number[]} An array containing all primes up to and including
 * the given integer.
 */
export function findPrimes(n) {
  const result = [];
  if (n < 2) {
    return result;
  }
  const isPrime = new Array(n + 1).fill(false);
  isPrime[2] = true;
  for (let i = 3; i <= n; i += 2) {
    isPrime[i] = true;
  }
  for (let i = 3; i * i <= n; i += 2) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      result.push(i);
    }
  }
  return result;
}
