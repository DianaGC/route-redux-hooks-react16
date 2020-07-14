import { combineReducers } from 'redux';
import users from '../modules/users/reducer/reducer'

const reducer = combineReducers({
    users
})
export default reducer;