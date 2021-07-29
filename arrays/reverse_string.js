// Create a function that reverses a string

/**
 * Reverses a string
 * 
 * Complexity - O(n)
 * 
 * @param {string} inputString 
 * @returns {string} reversedString
 */
function reverseString(inputString) {
    const stringArray = inputString.split("");
    const reversedArray = [];

    for (let i = stringArray.length; i >= 0; i--) {
        const character = stringArray[i];
        
        reversedArray.push(character);
    }

    return reversedArray.join("");
}

console.log(reverseString("Hello World"));