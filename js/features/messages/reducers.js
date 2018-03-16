import t from './actionTypes';

const defaultState = {
  messages: [],
};

const messageScreen = (state = defaultState, action) => {
  console.log('Message reducer hit');
  switch (action.type) {
    case 'LOGOUT':
      return Object.assign({}, defaultState);
    case t.POST_MESSAGE:
      console.log('POST_MESSAGE hit with ', action);
      return Object.assign({}, state, {
        messages: [...state.messages, action.message]
      });
    default:
      return state;
  }
};

export default messageScreen;
