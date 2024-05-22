// run `node index.js` in the terminal
const url = 'http://localhost:4000/posts';

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log('test');
    console.log({ json });
  })
  .catch(console.error);

  console.log('test')