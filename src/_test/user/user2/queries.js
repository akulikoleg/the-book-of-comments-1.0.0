const user2createQ = `mutation UserCreate($userInput: UserFields) {
                 userCreate(userInput: $userInput) {
                  firstName
                   lastName
                       _id
                     }
                }`;

const userGetByIDQ = `query Query($userId: ID!) {
  userGetById(userId: $userId) {
    _id
    firstName
    lastName
  }
}`;

const userGetAllQ = `query UsersGetAll($amount: Int) {
  usersGetAll(amount: $amount) {
    _id
    firstName
    lastName
  }
}`;

const userUpdateByIDQ = `mutation UserUpdateById($userInput: UserFields) {
  userUpdateById(userInput: $userInput) {
    _id
    firstName
    lastName
  }
}`;

const userDeleteByIDQ = `mutation UserDeleteById($userId: ID) {
  userDeleteById(userId: $userId)
}`


module.exports = { user2createQ, userGetByIDQ, userGetAllQ, userUpdateByIDQ, userDeleteByIDQ };