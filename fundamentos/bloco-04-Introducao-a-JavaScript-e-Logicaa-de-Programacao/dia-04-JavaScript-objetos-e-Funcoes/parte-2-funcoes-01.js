function isPalindrome(string) {
  let reverse = string.split('').reverse().join('')
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome('arara'));
console.log(isPalindrome('desenvolvimento'));