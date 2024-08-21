const {expect} = require('chai');
const gqlRequest = require("../../gqlRequest");
const { userGetByIdQ } = require("../queries");
const {user1} = require("./data");
const {queryData} = require("./queries");


let postData = null;
let respData  = null;
let userID = null;

describe("User GetById", () => {


    describe("User GetById - Positive test", () => {
        it("get user by id", (done) => {

            postData = {
                query: userGetByIdQ,
                variables: {
                    userId:  process.env.USER_ID,
                }
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    respData = res.body.data.userGetById;
                    console.log(respData);
                    expect(respData).to.be.an('object');
                    expect(respData.firstName).eq(user1.userInput.firstName);
                    expect(respData.lastName).eq(user1.userInput.lastName);
                    done();

                })

        })


    })
    describe("User GetById - Negative test", () => {

    })

})