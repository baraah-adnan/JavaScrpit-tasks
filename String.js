//String Metod
1
let str1 = "Hello";
let str2 = "Wold";
let str3 = " ";
console.log(str1.concat(str3).concat(str2));
//2
let str4 = "Javascript";
console.log(str4.length);
//3
let str5 = "programming";
console.log(str5[0]);
//4
let str6 = "coding is fun";
console.log(str6.substring(0, 7));
//5
let str7 = "cat";
console.log(str7.replace("a", "e"));
//6
console.log(str4.toLowerCase());
console.log(str4.toUpperCase());
//7
let str8 = "apple,banan,Orange";
console.log(str8.split(","));
//8
let str9 = ["hello", "world"];
console.log(str9.join(" "));
//9
let str10 = "  Hello world";
console.log(str10.trimStart());
//10
console.log(str10.includes("Hello"));
//11
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// 12
function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(countOccurrences("elephant", "e"));

// 13
function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));   

// 14
function capitalizeWords(str) {
    return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalizeWords("hello world")); 

// 15
let number = 1234.5678;
console.log(number.toFixed(2));
//16
function extractNumbers(str) {
    return str.match(/\d+/g);
}
console.log(extractNumbers("There are 3 apples and 2 oranges")); 

// 17
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
console.log(validateEmail("example@email.com")); 
console.log(validateEmail("example.com")); 

// 18
function censorWord(str, targetWord, replacementWord) {
    return str.replace(new RegExp(targetWord, 'g'), replacementWord);
}
console.log(censorWord("This is a bad word", "bad", "good")); 

// 19
function removeDuplicates(str) {
    return Array.from(new Set(str)).join("");
}
console.log(removeDuplicates("aabbc")); 

// 20
function sortCharacters(str) {
    return str.split("").sort().join("");
}
console.log(sortCharacters("hello")); 


// 21
function areAnagrams(str1, str2) {
    let sortedStr1 = str1.split("").sort().join("").toLowerCase();
    let sortedStr2 = str2.split("").sort().join("").toLowerCase();
    return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));   

// 22
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWords("The quick brown fox")); 

// 23
function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = words[0];
    
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    
    return longestWord;
}
console.log(findLongestWord("Web development is fascinating")); 

// 24
function isStrictPalindrome(str) {
    let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
console.log(isStrictPalindrome("A man, a plan, a canal, Panama!")); 
console.log(isStrictPalindrome("Hello World")); 

// 25

function charFrequency(str) {
    let frequency = {};
    
    for (let char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    
    return frequency;
}
console.log(charFrequency("mississippi")); 

// 26
function replaceVowels(str) {
    let vowelMap = { a: 1, e: 2, i: 3, o: 4, u: 5 };
    
    return str.replace(/[aeiou]/gi, function(match) {
        return vowelMap[match.toLowerCase()];-
    });
}