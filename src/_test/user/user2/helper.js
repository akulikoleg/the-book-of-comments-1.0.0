const {expect} = require('chai');
const {user2createQ} = require("./queries");
const gqlRequest = require("./gqlRequest");
const User = require("../../../models/User");
const mongoose = require("mongoose");
const {user2} = require("./data");


let postData = null;
let respData = null;
process.env.USER2_ID = null;

before("Delete all users ", ()=>{
    User.deleteMany({});
    console.log("Users deleted successfully.");
})

it("user create - helper", (done)=> {
    postData = {
        query: user2createQ,
        variables: user2
    }

    gqlRequest(postData)
    .expect(200)
    .end((err, res) => {
        if(err) return done(err);
        respData = res.body.data.userCreate;
        process.env.USER2_ID = respData._id;
        done();
    })


})