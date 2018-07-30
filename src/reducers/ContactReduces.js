// actions types
import { CONTACT_UPDATE_TITLE } from '../actions/ContactPage';


const initialState = {
  title: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONTACT_UPDATE_TITLE:
      return {
        ...state,
        title: action.payload.title,
      };
    default:
      return state;
  }
};
