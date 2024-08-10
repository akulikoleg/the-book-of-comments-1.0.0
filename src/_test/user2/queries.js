const user2createQ = `mutation UserCreate($userInput: UserFields) {
                 userCreate(userInput: $userInput) {
                  firstName
                   lastName
                       _id
                     }
                }`;

module.exports = { user2createQ };