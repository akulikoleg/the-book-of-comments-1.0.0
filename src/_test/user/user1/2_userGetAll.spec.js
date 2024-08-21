const {expect} = require('chai');
const gqlRequest = require("../../gqlRequest");
const { userGetAllQ } = require("../queries");

const {queryData} = require("./queries");


let postData = null;
let respData  = null;


describe('User GetAll', () => {

    it('UsersGetAll - positive', (done) => {

        postData = {
            query: userGetAllQ,
            variables: {
                amount: 20
            }
        }

        gqlRequest(postData)
            .expect(200)
            .end((err, res) => {
                if(err) return done(err);
                respData = res.body.data.usersGetAll;
                console.log(respData);
                console.log(respData[0]);
                expect(respData).to.be.an('array');
                expect(respData.length).lessThanOrEqual(20);
                done();
            })


    })


    describe('UsersGetAll - negative', (done) => {


    })

})