const {expect} = require('chai');
const gqlRequest = require('./gqlRequest');
const {userGetAllQ} = require("./queries");
const {user3}  = require("./data");

let postData = null;
let respData = null;

describe('User3 GetAll', () => {

    it('Should return an array with one user', (done) => {

        postData = {
            query: userGetAllQ,
            variables: {
                amount: 5
            }
        }

        gqlRequest(postData)
            .expect(200)
            .end((err, res) => {
                if(err) return done(err);
                respData = res.body.data.usersGetAll;
                console.log(respData);
                expect(respData).to.be.an('array');
                expect(respData.length).to.be.lessThanOrEqual(5);

                done();
            })
    })

})