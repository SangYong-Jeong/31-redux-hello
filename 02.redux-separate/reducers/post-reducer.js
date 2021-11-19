const init = [];

const postReducer = (prevState = init, { type, payload }) => {
  console.log('post');
  switch (type) {
    case 'ADD_POST':
      return [...prevState, payload];
    case 'REMOVE_POST':
      return prevState.filter((v) => v.id !== payload);
    default:
      return prevState;
  }
};
console.log('post1');
module.exports = postReducer;
