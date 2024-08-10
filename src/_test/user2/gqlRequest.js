const request = require("supertest");
const url = 'http://localhost:5000/';

function gqlRequest(postdata){
    return request(url)
        .post('/')
        .send(postdata)

}

module.exports = gqlRequest;