const {expect} = require('chai');
const {userUpdateByIDQ, userGetByIDQ} = require("./queries");
const gqlRequest = require("./gqlRequest");
const {user1} = require("../user1/data");
let postData = null;
let respData = null;


describe("User by ID ", () => {
    describe("userGet By ID positive", () => {
        it("should return user by id", (done)=>{
            postData = {
                query: userUpdateByIDQ,
                variables: {
                    userInput: {
                        firstName: "UpdatedUSER2FirstName",
                        userId: process.env.USER2_ID,
                    }
                }

            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    respData = res.body.data.userUpdateById;
                    expect(respData).to.be.an('object');
                    expect(respData.firstName).eq("UpdatedUSER2FirstName");
                    expect(respData._id).eq(process.env.USER2_ID);
                    done();
                })
        })
    })
})