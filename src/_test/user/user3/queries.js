const user3CreateQ = `mutation UserCreate($userInput: UserFields) {
  userCreate(userInput: $userInput) {
    firstName
    lastName
    _id
  }
}`;


module.exports = { user3CreateQ };