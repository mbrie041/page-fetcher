const request = require('request');
const fs = require('fs');
let givenURL;
let givenPath;
let storedWebsite;

const fetcher = (input1, input2) => {
  givenURL = input1;
  givenPath = input2;
  // url = new URL(givenURL);

  getPage(givenPath, givenURL);

};

const fileWrite = (inputPath, inputwebsite,) => {
  fs.writeFile(inputPath, inputwebsite, err => {
    if (err) {
      console.log('There is an error', err);
    } else {
      console.log(`Downloaded and saved ${inputwebsite.length} to ${inputPath}`);
    }
  });
};

const getPage = (givenPath, url) => {
  request(url, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    if (error) {
      console.log('There is an error with the request:', error);
      return;
    } else {
      storedWebsite = (body);

      fileWrite(givenPath, storedWebsite);
    }
  });

};


fetcher(process.argv[2], process.argv[3]);


//Use the request library to make the HTTP request
// Use Node's fs module to write the file
// Use the callback based approach we've been learning so far
// Do not use the pipe function
// Do not use synchronous functions (see warning below)

