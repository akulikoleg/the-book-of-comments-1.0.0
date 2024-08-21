const {expect} = require('chai');
const gqlRequest = require("../../gqlRequest");
const {queryData, userDeleteByIdQ} = require("./queries");
const {user1} = require("./data");

let postData = null;
let respData = null;


describe("User delete by ID", ()=> {



    describe("User delete by ID - positive", ()=> {




        it("delete user by ID", (done) => {

            postData = {
                query: userDeleteByIdQ,
                variables: {
                    userId: process.env.USER_ID,
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