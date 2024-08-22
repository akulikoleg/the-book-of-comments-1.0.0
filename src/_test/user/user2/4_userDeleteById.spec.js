const {expect} = require('chai');
const {userDeleteByIDQ } = require("./queries");
const gqlRequest = require("./gqlRequest");

let postData = null;
let respData = null;


describe("User by ID ", () => {
    describe("userGet By ID positive", () => {
        it("should return user by id", (done)=>{
            postData = {
                query: userDeleteByIDQ,
                variables: {
                    userId: process.env.USER2_ID
                }

            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    respData = res.body.data.userDeleteById;
                    expect(respData).to.be.true;
                    done();
                })
        })
    })
})