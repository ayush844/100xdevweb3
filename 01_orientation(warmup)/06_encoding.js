function arrayToHex(byteArray) {
  // Initialize an empty string to store the final hexadecimal result
  let hexString = '';
  // Loop through each byte in the byteArray
  for (let i = 0; i < byteArray.length; i++) {
    // Convert the current byte (0–255) to a hexadecimal string (base 16)
    hexString += byteArray[i].toString(16)
      // Ensure each byte is represented by exactly 2 hex characters
      // If the hex value is only 1 character long, pad it with a leading '0'
      .padStart(2, '0');
  }

  // Return the complete hexadecimal string
  return hexString;
}


// Example usage:
const byteArray = new Uint8Array([72, 101, 108, 108, 111]); // Corresponds to "Hello"
const hexString = arrayToHex(byteArray);
console.log(hexString);
// Output: "48656c6c6f"
// From a 5-byte array we get a 10-character hex string,
// because each byte (8 bits) is represented by 2 hex characters (1 hex char = 4 bits)

// ===================================================================

const byteArray1 = new TextEncoder().encode("Hello");
console.log(byteArray1);
// Uint8Array(5) [ 72, 101, 108, 108, 111 ]

// ===================================================================

function hexToArray(hexString) {
  const byteArray = new Uint8Array(hexString.length / 2);
  for (let i = 0; i < byteArray.length; i++) {
    byteArray[i] = parseInt(hexString.substr(i * 2, 2), 16);
  }
  return byteArray;
}

// Example usage:
const hex = "48656c6c6f";
const byteArrayFromHex = hexToArray(hex);
console.log(byteArrayFromHex); // Output: Uint8Array(5) [72, 101, 108, 108, 111]


//---------------------------------------------------------------------------------

// string to binary (str -> bytes -> binary)

const str = "Hi";

// Step 1: Convert string to bytes (UTF-8 / ASCII)
const bytes = new TextEncoder().encode(str);

console.log("here bytes are: ", bytes);

// Step 2: Convert each byte to binary
const binary = Array.from(bytes)
  .map(byte => byte.toString(2).padStart(8, '0'))
  .join(' ');

console.log("here binary is: ",binary);


//output

// here bytes are:  Uint8Array(2) [ 72, 105 ]
// here binary is:  01001000 01101001

//---------------------------------------------------------------------------------
