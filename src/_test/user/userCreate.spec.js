const { expect } = require("chai");
const {userCreateQ} = require("./queries.js");
const {user } = require("./data.js");
const gqlRequest = require("../gqlRequest.js");

let respData = null;
let postData = null;

describe("User Create", () => {
    describe("User Create - POSITIVE TESTS", () => {
        it("user create all fields", () => {
            postData = {
                query: userCreateQ,
                variables: user
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);
                    respData = res.body;
                    console.log(respData);
                    //expect(respData).eq();
                    done();
                })



        })
    //     it("user create all fields", () => {
    //
    //     })
    //     it("user create all fields", () => {
    //
    //     })
    // })
    //
    // describe("User Create - NEGATIVE tests", () => {
    //     it("user create all fields", () => {
    //
    //     })
    //     it("user create all fields", () => {
    //
    //     })
    //     it("user create all fields", () => {
    //
    //     })
    //
     })

})