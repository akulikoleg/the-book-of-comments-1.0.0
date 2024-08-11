const createUserQ = `mutation Mutation($userInput: UserFields) {
                             userCreate(userInput: $userInput) {
                             firstName
                             lastName
                             _id
                            }
                        }`;


module.exports = { createUserQ };