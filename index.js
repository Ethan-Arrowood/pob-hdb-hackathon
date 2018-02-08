const request = require('request')
const argv = require('minimist')(process.argv.slice(2));

function insertItem() {
  request({
    method: "POST",
    url: "https://pod-hdb-api.herokuapp.com/inventory/new",
    headers: {
      "content-type": "application/json"
    },
    body: {
      name: argv.iInvName,
      description: argv.iInvDesc
    },
    json: true
  }, (error, response, body) => {
    if (error) {
      console.error(error)
    }
    console.log(response)

    console.log(body)
  })
}

insertItem()