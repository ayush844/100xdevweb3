const crypto = require('crypto');

const myInput = "100xdevs";
const myHash = crypto.createHash('sha256').update(myInput).digest('hex');

console.log(myHash)

// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?

for(let i = 0; i < 1000000; i++) {
    let input = i.toString();
    let hash = crypto.createHash('sha256').update(input).digest('hex');
    if(hash.startsWith('00000')) {
        console.log(`Found! Input: ${input}, Hash: ${hash}`);
        break;
    }
}

// OR

while(true){
    let input = Math.floor(Math.random() * 1000000).toString();
    // in actual it should not be random it should start from 0 and go on increasing as we did in functions below in while loop
    let hash = crypto.createHash('sha256').update(input).digest('hex');
    if(hash.startsWith('00000')) {
        console.log(`Found! Input: ${input}, Hash: ${hash}`);
        break;
    }
}

//loop output: Found! Input: 596138, Hash: 00000691457f4f0ce13e187b9ab4fda6d42c8647752909b8f71f9dbd8f6bd4ab

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// What if I ask you that the input string should start with 100xdevs ? How would the code change?

for(let i = 0; i < 10000000000; i++) {
    let input = `100xdevs${i}`;
    let hash = crypto.createHash('sha256').update(input).digest('hex');
    if(hash.startsWith('00000')) {
        console.log(`Found! NEW Input: ${input}, Hash: ${hash}`);
        break;
    }
}
// loop output: Found! NEW Input: 100xdevs2274885, Hash: 00000b2d1dde70b56f41571855e268d140b304c7661c0ef04a8889bd83a88b06

// better approach:

//--------------------------------------------------------------------------------------------------------
// const crypto = require('crypto');

// // Function to find an input string that produces a hash starting with '00000'
// function findHashWithPrefix(prefix) {
//     let input = 0;
//     while (true) {
//         let inputStr = "100xdevs" + input.toString();
//         let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
//         if (hash.startsWith(prefix)) {
//             return { input: inputStr, hash: hash };
//         }
//         input++;
//     }
// }

// // Find and print the input string and hash
// const result = findHashWithPrefix('00000');
// console.log(`Input: ${result.input}`);
// console.log(`Hash: ${result.hash}`);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// What if I ask you to find a nonce for the following input - 
// harkirat => Raman | Rs 100
// Ram => Ankit | Rs 10

function findHashWithPrefix(prefix){
    let input = 0;
    while(true){
        let inputStr = `harkirat => Raman | Rs 100 Ram => Ankit | Rs 10 Nonce: ${input}`;
        let hash = crypto.createHash('sha256').update(inputStr).digest('hex');

        if(hash.startsWith(prefix)){
            return {
                input: inputStr,
                hash: hash,
                nonce: input
            }
        }

        input++;
    }
}

const result = findHashWithPrefix('0000');

console.log(`final result is: `, result);