const axios = require('axios');
const { Validator } = require('jsonschema');
const jobJsonSchema = require('../data/job.v1.json')
const { sendHttpRequest } = require("../helpers/sendHttpRequest");

const validator = new Validator();

describe('Linkedin jobs API validations', () => {
  let response;
  test.skip('should be status code 200 when pass valid data', async () => {
    response = await axios.post('https://linkedin-api8.p.rapidapi.com/search-posts', {
      keyword: 'microsoft',
      sortBy: 'date_posted',
      datePosted: '',
      page: 1,
      contentType: '',
      fromMember: [
        'ACoAAAEkwwAB9KEc2TrQgOLEQ-vzRyZeCDyc6DQ',
        'ACoAAANuWM8BtmA18VYdgqPtIWt6GhBCTDXToV4',
        'ACoAAA8BYqEBCGLg_vT_ca6mMEqkpp9nVffJ3hc'
      ],
      fromCompany: [1441, 1035],
      mentionsMember: [
        'ACoAAAEkwwAB9KEc2TrQgOLEQ-vzRyZeCDyc6DQ',
        'ACoAAA8BYqEBCGLg_vT_ca6mMEqkpp9nVffJ3hc'
      ],
      mentionsOrganization: [1441, 1035],
      authorIndustry: [96, 4],
      authorCompany: [1035],
      authorTitle: ''
    },
      {
        headers: {
          'x-rapidapi-key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad4',
          'x-rapidapi-host': 'linkedin-api8.p.rapidapi.com',
          'Content-Type': 'application/json'
        }
    },
      )
    expect(response.status).toEqual(200)
  })

  test.skip('should be appropriate json schema', async () => {
    const result = await validator.validate(response.data, jobJsonSchema)
    expect(result.valid).toEqual(true)
  });

  test('should be status code 200 when pass valid data', async () => {
    const conf = {
      url: 'https://linkedin-data-scraper.p.rapidapi.com/search_posts',
      headers: {
        'x-rapidapi-key': '7898d4c266msh4bb61e72c9c87ffp1309eejsn182377b55ad4',
        'x-rapidapi-host': 'linkedin-data-scraper.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        page: 1,
        query: 'Top 10',
        filters: [
          {
            key: 'datePosted',
            values: 'past-week'
          }
        ]
      }
    }

    response = await sendHttpRequest(conf, 'POST');
    expect(response.status).toEqual(200)
  })
});