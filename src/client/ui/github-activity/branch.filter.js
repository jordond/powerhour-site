/**
 * Take a input string and filter out the branch name
 */
function branch() {
  return (input) => input.replace('refs/heads/', '');
}

export default branch;
