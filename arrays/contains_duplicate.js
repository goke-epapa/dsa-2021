// Given an integer array nums
// return true if any value appears at least twice in the array
// return false if every element is distinct


/**
 * Solves the contains duplicate problem by leveraging sets
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 * @param {number[]} nums
 * 
 * @return {boolean} 
 */
function containsDuplicate(nums) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i]);
    }

    return (set.size != nums.length);
}


/**
 * Solves the contains duplicate problem by leveraging a set's constructor
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 * @param {number[]} nums
 * 
 * @return {boolean} 
 */
 function containsDuplicateUsingSetConstructor(nums) {
    return ((new Set(nums)).size != nums.length);
}

/**
 * Solves the contains duplicates problem with fewer operations
 * 
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 * 
 * @param {number[]} nums
 * 
 * @return {boolean} 
 */
 function containsDuplicateWithMap(nums) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if(map[element]) {
            return true;
        }
        map[nums[i]] = 1;
    }

    return false;
}

const dataProvider = [
    [
        [0, 1, 0, 3, 12],
        true,
        containsDuplicate
    ],
    [
        [0, 1, 3, 12],
        false,
        containsDuplicate
    ],
    [
        [0, 1, 0, 3, 12],
        true,
        containsDuplicateWithMap
    ],
    [
        [0, 1, 3, 12],
        false,
        containsDuplicateWithMap
    ],
    [
        [0, 1, 0, 3, 12],
        true,
        containsDuplicateUsingSetConstructor
    ],
    [
        [0, 1, 3, 12],
        false,
        containsDuplicateUsingSetConstructor
    ],
];

// Run Tests
dataProvider.forEach((element, index) => {
    console.time(index);
    let solution = element[2](element[0]);
    console.timeEnd(index);

    let result = element[1] == solution ? "Passed" : "Failed";
    console.log(`Test case #${index} - ${element[2].name} - ${result}`)
});