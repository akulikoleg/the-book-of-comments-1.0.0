const queryData = `mutation UserCreate($userInput: UserFields) {
                                userCreate(userInput: $userInput) {
                                            firstName
                                             lastName
                                             _id
                                }
                        }`;

const updateUserByIdQ = `mutation Mutation($userInput: UserFields) {
  userUpdateById(userInput: $userInput) {
    _id
    firstName
    lastName
  }
}`;

module.exports = { queryData , updateUserByIdQ };