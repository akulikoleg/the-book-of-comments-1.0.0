const user4CreateQ = `mutation UserCreate($userInput: UserFields) {
                                 userCreate(userInput: $userInput) {
                                            firstName
                                            lastName
                                            _id
                                  }
                            }
                           `;
module.exports = { user4CreateQ };