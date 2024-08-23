const {expect} = require('chai');
const gqlRequest = require('./gqlRequest');
const {user3UpdateByIdQ} = require("./queries");
const {user3}  = require("./data");

let postData = null;
let respData = null;

describe('User Update by ID ', () => {

    describe('userUpdate By ID - positive', () => {

        it('should update user By ID', (done) => {
            postData = {
                query: user3UpdateByIdQ,
                variables:{
                    userInput: {
                        userId: process.env.USER3_ID,
                        firstName: 'Scott'
                    }
                }
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res)=>{
                    if(err) return done(err);
                    respData = res.body.data.userUpdateById;
                    expect(respData.firstName).to.be.equal("Scott");
                    expect(respData._id).to.be.equal(process.env.USER3_ID);
                    done();
                })


        })

    })
})
