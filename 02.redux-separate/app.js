const { createStore } = require('redux');

const state = require('./states');
const reducer = require('./reducers');
const { logIn, logOut, addPost, removePost } = require('./actions');
console.log('post4');
const store = createStore(reducer, state);
console.log('post5');

/* subscribe ***************/
store.subscribe(() => {
  // 만약에 react를 안쓴다면 UI의 변경은 여기서 처리
  console.log('subscribe ===========');
  console.log(store.getState());
});

/* 시나리오 ***************/
store.dispatch(
  logIn({
    isLogIn: true,
    data: { id: 1, userid: 'booldook', username: '홍길동' },
  })
);
store.dispatch(
  addPost({
    id: 1,
    writer: store.getState().user.data.userid,
    comment: '홍길동이가 남기는 글',
    createdAt: new Date(),
  })
);
store.dispatch(
  addPost({
    id: 2,
    writer: store.getState().user.data.userid,
    comment: '홍길동이가 두번째 남기는 글',
    createdAt: new Date(),
  })
);
store.dispatch(removePost(1));
store.dispatch(logOut());
