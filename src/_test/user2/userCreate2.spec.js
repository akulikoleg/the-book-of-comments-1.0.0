
const {expect } = require('chai');
const {user2} = require("./data");
const {user2createQ} = require("./queries")
const gqlRequest = require("./gqlRequest");

let postData = null;
let respData = null;

describe('User create', ()=>{

    describe('User create - positive', ()=>{
        it('user create all fields', (done) => {
            postData = {
                query: user2createQ,
                variables: user2
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    respData = res.body;
                    console.log(respData);
                    done();
                })

        })

    })

    describe('User create - negative', ()=>{


    })

})