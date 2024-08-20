const {expect} = require('chai');
const gqlRequest = require("../../gqlRequest");
const { userGetByIdQ } = require("../queries");
const {user1} = require("./data");
const {queryData} = require("./queries");


let postData = null;
let respData  = null;
let userID = null;

describe("User GetById", () => {

    before("User create", (done) =>{
        postData = {
            query: queryData,
            variables: user1
        }

        gqlRequest(postData)
            .expect(200)
            .end((err, res)=>{
                if(err) return done(err);
                respData = res.body;
                userID = respData.data.userCreate._id;
                console.log("userID: " + userID);
                done();
            })

    })



    describe("User GetById - Positive test", () => {
        it("get user by id", (done) => {

            postData = {
                query: userGetByIdQ,
                variables: {
                    userId:  userID,
                }
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    respData = res.body.data.userGetById;
                    console.log(respData);
                    expect(respData).to.be.an('object');
                    expect(respData._id).eq(userID);
                    expect(respData.firstName).eq(user.userInput.firstName);
                    expect(respData.lastName).eq(user.userInput.lastName);
                    done();

                })

        })


    })
    describe("User GetById - Negative test", () => {

    })

})