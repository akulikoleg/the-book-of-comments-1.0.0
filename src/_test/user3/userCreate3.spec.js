const {expect } = require('chai');
const {user3CreateQ} = require("./queries");
const {user3} = require("./data");
const gqlRequest = require("./gqlRequest");

let postData = null;
let respData = null;

describe('User creation test', () => {

    describe("user Create - positive", () => {

        it('user Create - positive', (done) => {

            postData = {
                query: user3CreateQ,
                variables: user3
            }


            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    respData = res.body;
                    console.log(respData);
                    done();
                })


        })

    })


})

