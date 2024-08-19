const {expect } = require('chai');
const gqlRequest = require("../../gqlRequest");
const {queryData, updateUserByIdQ} = require("./queries");
const {user1} = require("./data");


let postData = null;
let respData = null;
let userID = null;


describe("User Update by ID", ()=> {




    describe("Update by ID - Positive", ()=> {
        before("Create User before update",  (done) => {

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

        it("update user 1 - positive", (done) => {

            postData = {
                query: updateUserByIdQ,
                variables: {
                    userInput: {
                        userId: userID,
                        firstName: "tetatet",
                        lastName: "testatest"
                    }
                }
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res)=>{
                    if(err) return done(err);
                    respData = res.body;
                    //console.log(respData);
                    expect(respData.data.userUpdateById._id).to.be.equal(userID);
                    expect(respData.data.userUpdateById.firstName).to.be.equal("tetatet");
                    expect(respData.data.userUpdateById.lastName).to.be.equal("testatest");



                    done();
                })

        })


    })





})