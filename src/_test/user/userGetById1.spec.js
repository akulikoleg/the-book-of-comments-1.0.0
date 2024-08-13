const {expect} = require('chai');
const gqlRequest = require("../gqlRequest");
const { userGetByIdQ } = require("./queries");
const {user} = require("./data");

let postData = null;
let respData  = null;

describe("User GetById", () => {

    describe("User GetById - Positive test", () => {
        it("get user by id", (done) => {

            postData = {
                query: userGetByIdQ,
                variables: {
                    userId: "66bacc8800dad14368fc5a1d"
                }
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    respData = res.body.data.userGetById;
                    console.log(respData);
                    expect(respData).to.be.an('object');
                    expect(respData._id).eq("66bacc8800dad14368fc5a1d");
                    expect(respData.firstName).eq(user.userInput.firstName);
                    expect(respData.lastName).eq(user.userInput.lastName);
                    done();

                })



        })

    })

    describe("User GetById - Negative test", () => {


    })


})