const {expect} = require('chai');
const gqlRequest = require('./gqlRequest');
const {user3GetByIdQ} = require('./queries');
const {user3 } = require('./data');

let postData = null;
let respData = null;


describe('User3 get by ID', () => {

    it('get user by ID - positive', (done) => {

        postData = {
            query: user3GetByIdQ,
            variables:  {
                userId: process.env.USER3_ID
            }
        }

        gqlRequest(postData)
            .expect(200)
            .end((err, res) => {
                if(err) return done(err);
                respData = res.body;
                expect(respData.data.userGetById._id).to.be.equal(process.env.USER3_ID);
                expect(respData.data.userGetById.firstName).to.be.equal(user3.userInput.firstName);
                expect(respData.data.userGetById.lastName).to.be.equal(user3.userInput.lastName);
                done();
            })

    })

})