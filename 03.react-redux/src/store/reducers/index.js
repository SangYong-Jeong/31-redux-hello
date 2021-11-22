import { combineReducers } from 'redux';

import user from './user-reducer';
import post from './post-reducer';

const reducer = combineReducers({ user, post });

export default reducer;

// combineReducers함수의 인수로 들어가는 객체의 key값에 따라 그 함수가 다루는 state의 이름이 달라지게된다.
// reducer라는 하나의 큰 함수를 쪼개는 개념 -> 하지만 하나로 합쳐져서 관리되는것은 맞다.
// 왜냐하면 한 번의 dispatch를 할 때 combineReducers의 인수인 객체 안에 들어간 함수들이 전부다 호출되어서 실행되기 때문이다.
// 이를 응용하면 하나의 action type으로 분리된 reducer 여러개를 동시에 control 하는 것도 가능하다.
// reducer를 분리한 경우 초깃값을 설정하는 게 중요하다. reducer는 초깃 값이 undefined 이거나 return 하는 값이 undefined이면 error를 내게 짜여져있다.
