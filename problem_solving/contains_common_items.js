/**
 * Given 2 arrays, create a function that lets a user know (true / false) whether there two arrays contain any common items
 * Example
 * ['a', 'b', 'c'] and ['d','e'] should return false 
 */

// Steps
// Explain your approach
// How large will the array get
// What's most important? Size or space complexity?
// Start with a naive / brute force approach
// See if problems can be improved
// Clarify assumptions

/**
 * Brute force approach
 * 
 * Time complexity - O(m * n)
 * Space complexity - O(1)
 * 
 * @param {array} array1 
 * @param {array} array2 
 */
function containCommonItemBruteForce(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] == array2[j]) {
                return true;
            }
        }
    }

    return false;
}

/**
 * Map approach
 * 
 * Time complexity - O(m + n)
 * Space complexity - O(m)
 * 
 * @param {array} array1 
 * @param {array} array2 
 */
function containsCommonItemUsingMap(array1, array2) {
    let map = new Map();
    for (let i = 0; i < array1.length; i++) {
        if(!map.get(array1[i])) {
            map.set(array1[i], 1)
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if(map.get(array2[i])){
            return true;
        }
    }

    return false;
}

/**
 * Set approach
 * 
 * Time complexity - O(m + n)
 * Space complexity - O(m)
 * 
 * @param {array} array1
 * @param {array} array2 
 */
function containsCommonItemUsingSet(array1, array2) {
    let set = new Set();
    for (let i = 0; i < array1.length; i++) {
        set.add(array1[i])
    }

    for (let i = 0; i < array2.length; i++) {
        if(set.has(array2[i])){
            return true;
        }
    }

    return false;
}

/**
 * Using inbuilt methods
 * 
 * Time complexity - O(m + n)
 * Space complexity - O(m)
 * 
 * @param {array} array1 
 * @param {array} array2 
 */
function containsCommonItemUsingInBuiltFunctions(array1, array2) {
    return array1.some(element => {array2.includes(element)});
}

const dataProvider = [
    [
        ['a', 'b', 'c'],
        ['c', 'd'],
        containCommonItemBruteForce,
        true
    ],
    [
        ['a', 'b', 'c'],
        ['d', 'e'],
        containCommonItemBruteForce,
        false
    ],
    [
        ['a', 'b', 'c'],
        ['c', 'd'],
        containsCommonItemUsingMap,
        true
    ],
    [
        ['a', 'b', 'c'],
        ['d', 'e'],
        containsCommonItemUsingMap,
        false
    ],
    [
        ['a', 'b', 'c'],
        ['c', 'd'],
        containsCommonItemUsingSet,
        true
    ],
    [
        ['a', 'b', 'c'],
        ['d', 'e'],
        containsCommonItemUsingSet,
        false
    ],
    [
        ['a', 'b', 'c'],
        ['c', 'd'],
        containsCommonItemUsingInBuiltFunctions,
        true
    ],
    [
        ['a', 'b', 'c'],
        ['d', 'e'],
        containsCommonItemUsingInBuiltFunctions,
        false
    ],
];

// Run Tests
dataProvider.forEach((element, index) => {
    console.time(index);
    let result = element[2](element[0], element[1]) == element[3] ? "Passed" : "Failed";
    console.timeEnd(index);
    console.log(`Test case #${index} - ${element[2].name} - ${result}`)
});