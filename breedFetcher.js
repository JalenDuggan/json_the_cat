const process = require('process')
const argv = process.argv
const data = argv.slice(2);

const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${data[0]}`, (error, response, body) => {
  

  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);

  
  const bodyObject = JSON.parse(body)
  
  if (bodyObject[0] === undefined) {
    console.log('\x1b[31m%s\x1b[4m', 'Breed Not Found');
    return
    
  }
  console.log(typeof(bodyObject));
  console.log(bodyObject[0]['description']);
  
  
})