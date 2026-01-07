// TextEncdoer is a class that encodes text into bytes and returns a unit8 array
// uint8Array is an array of integers, each integer is a byte(8 bits).

let binaryRepresentation = new TextEncoder().encode("h");

console.log(binaryRepresentation);
// Uint8Array(1) [ 104 ]    // this is a 1-byte array, 104 is the ASCII value of 'h'


binaryRepresentation = new TextEncoder().encode("hello");

console.log(binaryRepresentation);
// Uint8Array(5) [ 104, 101, 108, 108, 111 ]


//in uint8 array can only be 0-255, if we try to add 300, it will wrap around to 44(300 % 256 = 44)

let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;
console.log(uint8Arr);
// Uint8Array(4) [ 0, 44, 127, 128 ]