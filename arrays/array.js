class CustomArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length++] = item;

        return this.length;
    }

    pop() {
        const lastItem = this.get(this.length - 1);
        delete this.data[--this.length];

        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);

        // delete last item and decrement length
        delete this.data[--this.length];

        return item;
    }

    shiftItems(index){
        // Shift all elements back
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
    }

}

const newArray = new CustomArray();
newArray.push(5);
newArray.push(10);
newArray.push(15);

// console.log(newArray.get(0));
// console.log(newArray.pop());
// console.log(newArray);

newArray.delete(1);

console.log(newArray);
