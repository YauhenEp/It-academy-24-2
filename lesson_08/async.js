const axios = require('axios')


async function getResponse() {
  const response = await axios.get('https://petstore.swagger.io/v2/store/inventory');
  console.log(response.data);
  return response
}

console.log(getResponse())