const {queryData} = require('./queries');
const {user1 } = require('./data');
const gqlRequest = require('./gqlRequest');
const User = require('../../../models/User');
const mongoose = require('mongoose');



let postData = null;
let respData = null;
process.env.USER_ID = null;




before("Delete Many",   () => {

        return  User.deleteMany();
        console.log("users are deleted");

    })



it('user create all fields - helper', (done) =>{
            postData = {
                query: queryData,
                variables: user1
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res)=>{
                    if(err) return done(err);
                    respData = res.body.data.userCreate;
                    process.env.USER_ID = respData._id;
                    console.log("Test User has been created" , respData);
                    done();
                })

        })