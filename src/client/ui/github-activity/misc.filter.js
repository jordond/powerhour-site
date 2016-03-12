/**
 * Take a input string and filter out the branch name
 */
export function branch() {
  return (input) => input.replace('refs/heads/', '');
}

export function reverse() {
  return (items) => items.slice().reverse();
}

export default branch;
