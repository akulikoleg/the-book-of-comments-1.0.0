const {expect} = require('chai');
const {user2createQ} = require("./queries");
const gqlRequest = require("./gqlRequest");
const { user} = require("./data");

let postData = null;
let respData = null;

describe("User create by ID", ()=>{

        describe('User create by ID - positive', ()=>{

                it("user create all required fields", (done) => {

                        postData = {
                                query : user2createQ,
                                variables: user
                        }

                        gqlRequest(postData)
                                .expect(200)
                                .end((err, res) => {
                                        if(err) return done(err);
                                        respData = res.body.data.userCreate;
                                        expect(respData).to.be.an('object');
                                        expect(respData.firstName).eq(user.userInput.firstName);
                                        expect(respData.lastName).eq(user.userInput.lastName);
                                        done();

                                })
                })
        })


})