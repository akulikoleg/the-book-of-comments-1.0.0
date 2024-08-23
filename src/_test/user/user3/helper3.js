const gqlRequest = require('./gqlRequest');
const {user3} = require('./data');
const {user3CreateQ} = require('./queries');
const User = require('../../../models/User');

let postData = null;
let respData = null;

describe("User create - helper", ()=> {

    before("Delete all users from DB", () => {
        User.deleteMany({});
        console.log("Database deleted successfully.");
    })

    it("Create test User", (done)=> {
        postData = {
            query: user3CreateQ,
            variables: user3
        }

        gqlRequest(postData)
            .expect(200)
            .end((err, res) => {
                if(err) return done(err);
                respData = res.body.data.userCreate;
                process.env.USER3_ID = respData._id;
                // console.log('respData=', respData);
                // console.log('USER3_ID=', process.env.USER3_ID);
                done();
            })
    })
})