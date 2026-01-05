
let binaryRepresentation = new TextEncoder().encode("h");

console.log(binaryRepresentation);
// Uint8Array(1) [ 104 ]


binaryRepresentation = new TextEncoder().encode("hello");

console.log(binaryRepresentation);
// Uint8Array(5) [ 104, 101, 108, 108, 111 ]


let uint8Arr = new Uint8Array([0, 255, 127, 128]);
uint8Arr[1] = 300;
console.log(uint8Arr);
// Uint8Array(4) [ 0, 44, 127, 128 ]