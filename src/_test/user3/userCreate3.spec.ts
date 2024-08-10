const request = require("supertest");
const {expect } = require('chai');
const url = "http://localhost:5000/";

let postData = null;
let respData = null;

describe('User creation test', () => {

    describe("user Create - positive", () => {

        it('user Create - positive', (done) => {

            postData = {
                query: `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`,
                variables: {
                    userInput: {
                        firstName: "james",
                        lastName: "Branson"
                    }
                }
            }


            request(url)
                .post('/')
                .send(postData)
                .expect(200)
                .end((err, res) => {
                    if(err) return done(err);
                    respData = res.body;
                    console.log(respData);
                    done();
                })


        })

    })


})

