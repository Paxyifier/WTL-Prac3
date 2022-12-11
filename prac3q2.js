// Create functions to sort, reverse and search for an element in an array. Register and trigger these functions using events.
const printArray = (arr,stringOfArray= "") =>{
    for (let idx = 0; idx<arr.length ;idx++) {
        stringOfArray += arr[idx];
        stringOfArray += " ";
    }
    console.log(stringOfArray);
}
const events = require('events');
const sort = (arr) =>{
    printArray(arr,"Array before sorting: ")
    arr.sort((a,b) => a < b);
    printArray(arr, "Array after sorting: ");
};
const reverse = (arr) => {
    printArray(arr,"Array before reversing: ");
    arr.reverse((a,b) => a > b);
    printArray(arr,"Array after reversing: ");
};
const find = (arr,x)=> {
    for (let idx = 0; idx < arr.length; idx++) {
        if (arr[idx] === x){
            console.log( "Element",x," Found at "+idx);
            return;
        }
    }
    console.log("Element",x,"not found.")
}

const eventEmitter = new events.EventEmitter();
var arr = [2,4,6,8,10,12,15,19,22,26,29,33]

eventEmitter.addListener('sort',sort);
eventEmitter.addListener('reverse',reverse);
eventEmitter.addListener('find',find);
console.log("Calling Event Emitters: ")
eventEmitter.emit('sort',arr);
eventEmitter.emit('reverse',arr);
eventEmitter.emit('find',arr,10);