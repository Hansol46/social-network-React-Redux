const { default: profileReducer, addPost } = require("./profile-reducer");



test('new post should be added', () => {
  // 1. test data
  let action = addPost('hello, guys!')
  let state = {
    postData: [
        {id: 1, name: "Alex Vasilev", message: "hi, how are you?"},
        {id: 2, name: "Mary Iva", message: "its my first post"},
        {id: 3, name: "Anna Konev", message: "go hell!"},
        {id: 4, name: "Ivan Pahanov", message: "Bla-bla"},
        {id: 5, name: "Max Konev", message: "you best man! p.s.:sarcasm"}
      ]
  };
  // 2. action 
  let newState = profileReducer(state, action)
  // 3. expectation 
  expect(newState.postData.length).toBe(5)
});

