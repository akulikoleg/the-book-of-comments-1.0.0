const {expect } = require('chai');
const gqlRequest = require("../../gqlRequest");
const {queryData, updateUserByIdQ} = require("./queries");
const {user1} = require("./data");


let postData = null;
let respData = null;
let userID = null;


describe("User Update by ID", ()=> {


    describe("Update by ID - Positive", ()=> {


        it("update user 1 - positive", (done) => {

            postData = {
                query: updateUserByIdQ,
                variables: {
                    userInput: {
                        userId: process.env.USER_ID,
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
                    expect(respData.data.userUpdateById._id).to.be.equal(process.env.USER_ID);
                    expect(respData.data.userUpdateById.firstName).to.be.equal("tetatet");
                    expect(respData.data.userUpdateById.lastName).to.be.equal("testatest");

                    done();
                })

        })


    })





})