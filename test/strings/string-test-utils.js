/**
 * Prints a long string, automatically wrapping lines at space characters
 * to ensure the entire string fits within the visible screen area.
 *
 * @param {string} s - The long string to be printed.
 */
function printLongString(s) {
  const maxLen = 68;
  let currIndex = 0;

  while (currIndex < s.length) {
    let nextIndex = Math.min(currIndex + maxLen, s.length);
    let line = s.slice(currIndex, nextIndex);

    if (nextIndex < s.length && s.charAt(nextIndex) !== " ") {
      const lastSpace = line.lastIndexOf(" ");
      if (lastSpace !== -1) {
        nextIndex = currIndex + lastSpace + 1;
        line = s.slice(currIndex, nextIndex);
      }
    }

    console.log(line);
    currIndex = nextIndex;
  }
}
