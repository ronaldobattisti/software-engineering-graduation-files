function isPalindrome(x){
    var pal = false;
    for (var i = 0; i < x.length; i++){
        if(x[i] != x[x.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(`String "-121" is palindrome? ${isPalindrome("-121")}`);
console.log(`String "9" is palindrome? ${isPalindrome("-121")}`);
console.log(`String "121" is palindrome? ${isPalindrome("121")}`);