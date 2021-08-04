// Given an integer array nums and an integer k
// return true if there are two distinct indices i and j in the array 
// such that nums[i] == nums[j] and abs(i - j) <= k.


/**
 * Time Complexity - O(n)
 * Space Complexity - O(n)
 * 
 * @param {number[]} nums
 * 
 * @return {boolean} 
 */
 function containsDuplicateII(nums, k) {
    const map = {}, n = nums.length;

    for (let i = 0; i < n; i++) {
        const existingElement = map[nums[i]]
        if(typeof existingElement !== 'undefined' && (i - existingElement) <= k) {
            return true;
        }
        map[nums[i]] = i;
    }

    return false;
}

const dataProvider = [
    [
        [1,2,3,1],
        3,
        true,
        containsDuplicateII
    ],
    [
        [1,0,1,1],
        1,
        true,
        containsDuplicateII
    ],
    [
        [1,2,3,1,2,3],
        2,
        false,
        containsDuplicateII
    ]
];

// Run Tests
dataProvider.forEach((element, index) => {
    console.time(index);
    let solution = element[3](element[0], element[1]);
    console.timeEnd(index);

    let result = element[2] == solution ? "Passed" : "Failed";
    console.log(`Test case #${index} - ${element[3].name} - ${result}`)
});