const axios = require('axios');
const { Validator } = require('jsonschema');
const covid19JsonSchema = require('../data/covid_19.v1.json')
const https = require("https");
const { sendHttpRequest } = require('../helpers/sendHttpRequest')

const validator = new Validator();

describe('Covid-19 API validations', () => {
  let response;
  test('should be status code 200 when pass valid data', async () => {
     await axios.get('https://covid-19-data.p.rapidapi.com/country?name=italy&format=json', {
      headers: {
        'x-rapidapi-key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad4',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    })
       .then(data => response = data)
       .catch((err) => {
         response = err
      })

    expect(response.status).toEqual(200)
  })

  test('should be appropriate json schema', async () => {
    // const result = await validator.validate(response.data, covid19JsonSchema)
    expect(response).toBeValidSchema(covid19JsonSchema)
  })

  test('should be status code 403 when pass invalid api key', async () => {
    const conf = {
      url: 'https://covid-19-data.p.rapidapi.com/country?name=italy&format=json',
      headers: {
        'x-rapidapi-key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
      },
    }

    response = await sendHttpRequest(conf);

    expect(response.status).toEqual(403)
  })
});