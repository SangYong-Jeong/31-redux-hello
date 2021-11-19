const { combineReducers } = require('redux');

const user = require('./user-reducer');
const post = require('./post-reducer');
console.log('post2');
const reducer = combineReducers({ user, post });
console.log('post3');

module.exports = reducer;
