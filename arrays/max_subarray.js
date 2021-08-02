// Given an integer array nums, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.
// A subarray is a contiguous part of an array

/**
 * Complexity - O(n^2)
 * @param {number[]} nums
 * 
 * @return {number} 
 */
function maxSubArrayBruteForce(nums) {
    let maxSum = Math.max(...nums);

    maxSum = Math.max(nums.reduce((sum, currentValue) => sum + currentValue), maxSum);
    
    let k = 2;
    while(k < nums.length) {
        let sum = 0;
        for(let i = 0; i < k; i++) {
            sum += nums[i];
        }
        if (sum > maxSum) {
            maxSum = sum;
        }
    
        for(let i = 0; i < nums.length - k; i++) {
            sum -= nums[i];
            sum += nums[i + k];

            if (sum > maxSum) {
                maxSum = sum;
            }
        }

        k++;
    }

    return maxSum;
}

/**
 * Max Sub Array using Kadane's algorithm
 * 
 * Complexity - O(n)
 * 
 * @param {number[]} nums
 * 
 * @return {number} 
 */
 function maxSubArrayWithDynamicProgramming(nums) {
    let localMax = 0;
    let globalMax = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        localMax += nums[i];

        globalMax = globalMax > localMax ? globalMax : localMax;
        localMax = localMax > 0 ? localMax : 0;
    }

    return globalMax;
 }

const dataProvider = [
    [
        [-2, 1, -3, 4, -1, 2, 1, -5, 4],
        6,
        maxSubArrayBruteForce
    ],
    [
        [5, 4, -1, 7, 8],
        23,
        maxSubArrayBruteForce
    ],
    [
        [-2, 1, -3, 4, -1, 2, 1, -5, 4],
        6,
        maxSubArrayWithDynamicProgramming
    ],
    [
        [5, 4, -1, 7, 8],
        23,
        maxSubArrayWithDynamicProgramming
    ],
    [
        [-1],
        -1,
        maxSubArrayWithDynamicProgramming
    ]
]

// Run Tests
dataProvider.forEach((element, index) => {
    console.time(index);
    let solution = element[2](element[0]);
    
    let result = element[1] == (solution) ? "Passed" : "Failed";
    console.timeEnd(index);
    console.log(`Test case #${index} - ${element[2].name} - ${result}`)
});

/**
0: 0.216ms
Test case #0 - maxSubArrayBruteForce - Passed
1: 0.014ms
Test case #1 - maxSubArrayBruteForce - Passed
2: 0.047ms
Test case #2 - maxSubArrayWithDynamicProgramming - Passed
3: 0.011ms
Test case #3 - maxSubArrayWithDynamicProgramming - Passed
 * 
 */