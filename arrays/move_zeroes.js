// Given an integer array nums, move all 0s to the end of it
// while maintaining the relative order of the non-zero elements

// Note that you must do thi in place without making a copy of the array


/**
 * Moves all zeroes to the end of the array
 * Complexity - O(n)
 * 
 * @param {number[]} nums
 * 
 * @return {number[]} 
 */
function moveZeroes(nums) {

    for (let i = 0, lastZeroFound = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            const temp = nums[i];
            nums[i] = nums[lastZeroFound];
            nums[lastZeroFound] = temp;
            lastZeroFound++;
        }
    }

    return nums;
}

/**
 * Moves all zeroes to the end of the array, only swaps when there is a zero
 * 
 * Complexity - O(n) 
 * 
 * @param {number[]} nums
 * 
 * @return {number[]} 
 */
function moveZeroesOptimised(nums) {

    for (let i = 0, lastZeroFound = -1; i < nums.length; i++) {
        // first occurence of 0
        if(nums[i] == 0 && lastZeroFound == -1) {
            lastZeroFound = i;
        }

        if (nums[i] != 0 && nums[lastZeroFound] == 0) {
            const temp = nums[i];
            nums[i] = nums[lastZeroFound];
            nums[lastZeroFound++] = temp; 
        }
    }

    return nums;
}

const dataProvider = [
    [
        [0, 1, 0, 3, 12],
        [1, 3, 12, 0, 0],
        moveZeroes
    ],
    [
        [1, 1, 1, 3, 12],
        [1, 1, 1, 3, 12],
        moveZeroes
    ],
    [
        [0, 1, 0, 3, 12],
        [1, 3, 12, 0, 0],
        moveZeroesOptimised
    ],
    [
        [1, 1, 1, 3, 12],
        [1, 1, 1, 3, 12],
        moveZeroesOptimised
    ],
    [
        [1, 0, 1],
        [1, 1, 0],
        moveZeroesOptimised
    ],
    [
        [1, 0, 1],
        [1, 1, 0],
        moveZeroes
    ]
]

// Run Tests
dataProvider.forEach((element, index) => {
    console.time(index);
    let solution = element[2](element[0]);
    console.timeEnd(index);

    let result = JSON.stringify(element[1]) == JSON.stringify(solution) ? "Passed" : "Failed";
    console.log(`Test case #${index} - ${element[2].name} - ${result}`)
});