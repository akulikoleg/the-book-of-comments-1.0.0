const {expect } = require('chai');
const {queryData} = require('./queries');
const {user1 } = require('./data')
const gqlRequest = require('./gqlRequest')

let postData = null;
let respData = null;

describe('User Create ', () => {
    describe('User create - Positive', () => {
        it('user create all fields', (done) =>{
            postData = {
                query: queryData,
                variables: user1
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res)=>{
                    if(err) return done(err);
                    respData = res.body;
                    console.log(respData);
                })
                done();



        })
        it('user required all fields', () =>{

        })
    })

    describe('User create - Negative', () => {
        it('user create empty fields', () =>{

        })
        it('user create non-required fields only', () =>{

        })
    })

})