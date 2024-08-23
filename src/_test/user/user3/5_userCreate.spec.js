const gqlRequest = require('./gqlRequest');
const {emptyUser} = require('./data');
const {user3CreateQ} = require('./queries');
const {expect} = require('chai');


let postData = null;
let respData = null;

describe("User create test", ()=> {


    it("Create test User - empty fields", (done)=> {
        postData = {
            query: user3CreateQ,
            variables: emptyUser
        }

        gqlRequest(postData)
            .expect(200)
            .end((err, res) => {
                if(err) return done(err);
                respData = res.body.data;
                expect(respData).to.be.an('object');
                done();
            })
    })
})