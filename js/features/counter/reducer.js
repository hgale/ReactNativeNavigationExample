import t from './actionTypes';

const defaultState = {
  count: 0,
};

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return Object.assign({}, defaultState);
    case t.INCREMENT_COUNTER:
      const count = state.count + 1;
      return Object.assign({}, state, {
        count,
      });
    default:
      return state;
  }
};

export default counter;
