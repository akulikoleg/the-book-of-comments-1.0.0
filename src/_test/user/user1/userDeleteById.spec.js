const {expect} = require('chai');
const gqlRequest = require("../../gqlRequest");
const {queryData, userDeleteByIdQ} = require("./queries");
const {user1} = require("./data");

let postData = null;
let respData = null;
let userID = null;

describe("User delete by ID", ()=> {

    before("Create User before delete", (done) => {

        postData = {
            query: queryData,
            variables: user1
        }

        gqlRequest(postData)
            .expect(200)
            .end((err, res)=>{
                if(err) return done(err);
                respData = res.body;
                userID = respData.data.userCreate._id;
                //console.log("userID: " + userID);
                done();
            })
    })

    describe("User delete by ID - positive", ()=> {




        it("delete user by ID", (done) => {

            postData = {
                query: userDeleteByIdQ,
                variables: {
                    userId: userID
                }
            }

            gqlRequest(postData)
                .expect(200)
                .end((err, res)=>{
                    if(err) return done(err);
                    respData = res.body;
                    //console.log(respData);
                    expect(respData.data.userDeleteById).to.be.true;
                    done();
                })

        })

    })

})