const {expect} = require('chai');
const gqlRequest = require('./gqlRequest');
const {user3DeleteByIdQ} = require('./queries')

let postData = null;
let respData = null;

describe('Delete User By ID', () => {

    describe('delete User By id - positive', () => {

        it('Should return true if the user doesn\'t exist', (done) => {

            postData = {
                query:user3DeleteByIdQ,
                variables: {
                    userId: process.env.USER3_ID
                }
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    respData = res.body.data;
                    expect(respData.userDeleteById).to.be.true;
                    done();
                })



        })
    })
})