// dependencies
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// import reducers...
import home from './HomePageReducer';
import contact from './ContactReduces';


const rootReducer = combineReducers({
  router,
  home,
  contact,
});

export default rootReducer;
