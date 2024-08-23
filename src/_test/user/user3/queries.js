const user3CreateQ = `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`;

const user3GetByIdQ = `query Query($userId: ID!) {
  userGetById(userId: $userId) {
    _id
    firstName
    lastName
  }
}`;

const userGetAllQ = `query Query($amount: Int) {
  usersGetAll(amount: $amount) {
    _id
    firstName
    lastName
  }
}`;

const user3UpdateByIdQ = `mutation UserUpdateById($userInput: UserFields) {
  userUpdateById(userInput: $userInput) {
    _id
    firstName
    lastName
  }
}`;

const user3DeleteByIdQ = `mutation UserDeleteById($userId: ID) {
  userDeleteById(userId: $userId)
}`

module.exports = { user3CreateQ, user3GetByIdQ, userGetAllQ, user3UpdateByIdQ, user3DeleteByIdQ };