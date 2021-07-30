// Give two arrays that are sorted, merge the sorted arrays
// [0, 3, 4, 31] + [4, 6, 30] -> [0, 3, 4, 5, 6, 30, 31]


/**
 * Merges a sorted array using a two pointer method
 * 
 * Complexity O(m + n)
 * @param {Array} array1 
 * @param {Array} array2 
 * @returns {Array} mergedArray
 */
function mergeSortedArrays(array1, array2) {
    // validations
    if (!validateArray(array1) || !validateArray(array2)) {
        return 'invalid input';
    }
    
    if (array1.length == 0) {
        return array2;
    }

    if (array2.length == 0) {
        return array1;
    }

    const mergedArray = [];
    const totalLength = array1.length + array2.length;

    let array1Pointer = 0;
    let array2Pointer = 0;

    while(true) {
        if(mergedArray.length == totalLength) {
            break;
        }

        if (array1Pointer == array1.length) {
            mergedArray.push(array2[array2Pointer]);
        } else if (array2Pointer == array2.length) {
            mergedArray.push(array1[array1Pointer]);
        } else if(array1[array1Pointer] < array2[array2Pointer]) {
            mergedArray.push(array1[array1Pointer++]);
        } else {
            mergedArray.push(array2[array2Pointer++]);
        }
    }

    return mergedArray;
}

function validateArray(inputArray) {
    if(!inputArray || !(inputArray instanceof Array)) {
        return false;
    }

    return true;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays([4, 6, 30], [0, 3, 4, 31]));
console.log(mergeSortedArrays([-10,-9,-8,1000], [0, 3, 4, 31]));