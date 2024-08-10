
const {expect} = require("chai");
const {user4CreateQ} = require("./queries");
const { user4 } = require("./data");
const gqlRequest = require("./gqlRequest");

let postData = null;
let respData = null;

describe("User Create ", () => {
    describe("user create positive", () => {

        it("user create required fields",  (done) => {

            postData = {
                query: user4CreateQ,
                variables: user4
            }


            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    respData = res.body;
                    console.log(respData)
                    done();

                })




        })
    })
    describe("user create negative", () => {


    })


})
