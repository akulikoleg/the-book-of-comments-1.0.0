const userCreateQ = `mutation UserCreate($userInput: UserFields) {
         userCreate(userInput: $userInput) {
             firstName
             lastName
               _id
           }
         }`;


const userGetByIdQ = `query Query($userId: ID!) {
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

module.exports = { userCreateQ, userGetByIdQ, userGetAllQ }