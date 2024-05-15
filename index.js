// run `node index.js` in the terminal
const url = 'http://localhost:4000/posts';

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log('test1');
    console.log({ json });
  })
  .catch(console.error);
