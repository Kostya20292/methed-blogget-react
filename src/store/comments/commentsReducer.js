import { UPDATE_COMMENT } from './commentsActions';

const initialState = {
  comment: 'Ваш комментарий!',
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };
    default:
      return state;
  }
};
