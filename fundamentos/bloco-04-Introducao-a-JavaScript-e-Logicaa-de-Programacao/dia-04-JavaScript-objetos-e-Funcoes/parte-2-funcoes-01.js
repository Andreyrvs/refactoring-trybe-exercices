function isPalindrome(string) {
  const reverse = string.split('').reverse().join('');
  if (reverse === string) return true;
  return false;
}
console.log(isPalindrome('arara'));
console.log(isPalindrome('desenvolvimento'));