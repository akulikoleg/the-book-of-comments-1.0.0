const {expect} = require('chai');
const {user5 } = require("./data")
const {createUserQ} = require('./createUserQ');
const gqlRequest = require("./gqlRequest");

let postData = null;
let respData = null;

describe('Create User ', () => {

    describe('Positive create', () => {

        it('user create all fields', (done) => {

            postData = {
                query: createUserQ,
                variables: user5
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    respData =  res.body;
                    console.log(respData);
                    done();
                })

        })

    })

    describe('Negative create', () => {

    })

})