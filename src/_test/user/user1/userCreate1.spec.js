const {expect } = require('chai');
const {queryData} = require('./queries');
const {user1 } = require('./data');
const gqlRequest = require('./gqlRequest');
const User = require('../../../models/User');
const mongoose = require('mongoose');

let postData = null;
let respData = null;




describe('User Create ', () => {
    //
    // before("Delete All users",  (done) => {
    //     return  User.deleteMany({});
    //     done();
    // })
    describe('User create - Positive', () => {




        it('user create all fields - 1', (done) =>{
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
                    done();
                })




        })

        it('user create all fields - 2', (done) =>{
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
                    done();
                })




        })

        it('user create all fields - 3', (done) =>{
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
                    done();
                })

        })

    })

    describe('User create - Negative', () => {

        it('user create empty fields', () =>{

        })
        it('user create non-required fields only', () =>{

        })
    })

})