const request = require('request');
let givenPath;
let givenURL;

const storingVariables = (input1,input2) => {
givenURL = input1;
givenPath = input2;
}

// request('http://example.edu/', (error, response, body) => {
//   // console.log('error:', error); // Print the error if one occurred
//   // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   // console.log('body:', body); // Print the HTML for the Google homepage.

//   let storedWebsite = ('body:', body);

//   console.log(storedWebsite)
//   return storedWebsite;
// });

storingVariables(process.argv[2],process.argv[3]);
console.log(givenPath, givenURL)