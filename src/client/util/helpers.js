/**
 * Shuffle a given array
 *
 * @see {@link http://stackoverflow.com/a/6274398/1867916|StackOverflow}
 * @param array Elements to be shuffled
 * @returns Shuffled array
 */
export function shuffle(array) {
  let counter = array.length;

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;

    const temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

/**
 * Require all the files in a given folder context
 * ie Require a subdirectory of images
 */
export function requireAll(context) {
  return context.keys().map(context);
}
