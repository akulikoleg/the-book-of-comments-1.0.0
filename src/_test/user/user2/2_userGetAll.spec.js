const {expect} = require('chai');
const {userGetAllQ} = require("./queries");
const gqlRequest = require("./gqlRequest");
const {user1} = require("../user1/data");
let postData = null;
let respData = null;

describe('UserGetALL', () => {

    describe('userGetAll positive', () => {

        it("should return all Users ", (done)=>{

            postData = {
                query: userGetAllQ,
                variables: {
                    amount: 25
                }
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    respData = res.body.data.usersGetAll;
                    expect(respData).to.be.an('array');
                    expect(respData.length).to.be.lessThanOrEqual(25);
                    done();
                })
        })
    })
});