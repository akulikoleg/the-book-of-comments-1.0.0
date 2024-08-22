const {expect} = require('chai');
const {userGetByIDQ} = require("./queries");
const gqlRequest = require("./gqlRequest");
const {user1} = require("../user1/data");
let postData = null;
let respData = null;

describe('UserGetBy ID', () => {

    describe('userGet By ID positive', () => {

        it("should return user by id", (done)=>{

            postData = {
                query: userGetByIDQ,
                variables: {
                    userId: process.env.USER2_ID,
                }
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    respData = res.body.data.userGetById;
                    expect(respData).to.be.an('object');
                    expect(respData.firstName).eq("User2Helper");
                    expect(respData.lastName).eq("User2test");
                    done();
                })
        })
    })
});