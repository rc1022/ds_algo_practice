// Challenge 1: Word Frequency Counter
const frequencyCounter = (str) => {
    let words = str.split(' ');
    let result = {};
    words.map(word => {
        word in result ? result[word] = result[word]+1 : result[word] = 1
    })
    return result;
}

const sentence = "the cat jumped over the cat";
console.log(frequencyCounter(sentence));

// Challenge 2: Find First Non-Repeating Character (Map)
// Input: "aabccbd"
// Output: "d"

function firstNoRepeat(str) {
    let count = {};
    for ( let char of str) {
        char in count ? count[char] = count[char] + 1 : count[char] = 1;
    }

    for ( let char of str ) {
        if (count[char] === 1) return char;
    }
}

const s = "aabbccbd"
console.log(firstNoRepeat(s));

// Challenge 3: Group Anagrams (Map)
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [ ["eat","tea","ate"],["tan","nat"],["bat"] ]
// result = { "aet":["eat","tea","ate"] ...}
function anagramsGroup(str){
    let result = {};
    let output = [];

    str.map(word => {
        const sortedStr = word.split("").sort().join("");
        sortedStr in result ? result[sortedStr].push(word) : result[sortedStr] = [ word ];
    })

    return Object.values(result);
}

let list = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(anagramsGroup(list));