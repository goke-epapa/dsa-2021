let print = console.log;
const strings = ['a', 'b', 'c','d'];

// push
strings.push('e'); // O(1)
print(strings);

// pop
strings.pop('e'); // O(1)
print(strings);

// insert using inbuilt function
strings.unshift('x');


/**
 * Inserts an item at the beginning of the array
 * 
 * O(n)
 * @param {*} item 
 */
Array.prototype.insertAtBeginning = function(item) {
    // push last item
    this.push(this[this.length - 1]);

    // shift items left
    for(let i = this.length - 1; i > 0; i--) {
        this[i] = this[i - 1]; 
    }

    // overwrite first item with new item
    this[0] = item;
}

strings.insertAtBeginning('.');
print(strings);

// splice
strings.splice(2, 0, 'alien'); //  O(n)
print(strings);