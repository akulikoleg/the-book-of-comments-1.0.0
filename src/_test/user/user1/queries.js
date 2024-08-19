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

const userDeleteByIdQ = `mutation UserDeleteById($userId: ID) {
  userDeleteById(userId: $userId)
}`;

module.exports = { queryData , updateUserByIdQ, userDeleteByIdQ };