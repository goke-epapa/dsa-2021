// Given an array of integers nums, and an integer target
// return indices of the two numbers such that they add up to the target
// only one solution exists

/**
 * Returns the indices of items that add up to target
 * 
 * Complexity O(n^2)
 * 
 * @param {Array} nums 
 * @param {number} target 
 */
function twoSumBruteForce(nums, target) {
    if(!nums || !(nums instanceof Array) || !target || typeof target !== 'number') {
        return 'invalid input';
    }

    for(let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
        }
    }
}

/**
 * Returns the indices of items that add up to target usings maps
 * 
 * Complexity O(n)
 * 
 * @param {Array} nums
 * @param {number} target 
 */
 function twoSumUsingMap(nums, target) {
    if(!nums || !(nums instanceof Array) || !target || typeof target !== 'number') {
        return 'invalid input';
    }

    const map = new Map();

    for(let i = 0; i < nums.length; i++) {
        const differenceToSum = target - nums[i];

        if(differenceToSum < 0) {
            continue;
        }

        if (map.has(differenceToSum)) {
            return [map.get(differenceToSum), i];
        } else {
            map.set(nums[i], i);
        }
    }
}

const dataProvider = [
    [
        [2, 7, 11, 15],
        9,
        twoSumBruteForce,
        [0, 1]
    ],
    [
        [2, 7, 11, 15],
        9,
        twoSumUsingMap,
        [0, 1]
    ]
]

// Run Tests
dataProvider.forEach((element, index) => {
    console.time(index);
    let solution = element[2](element[0], element[1]);
    solution = element[0][solution[0]] + element[0][solution[1]];
    
    let result = element[1] == (solution) ? "Passed" : "Failed";
    console.timeEnd(index);
    console.log(`Test case #${index} - ${element[2].name} - ${result}`)
});

/**
0: 0.166ms
Test case #0 - twoSumBruteForce - Passed
1: 0.060ms
Test case #1 - twoSumUsingMap - Passed
 */