This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### How to implement Router?

``` npm install react-router-dom```

* Create a `routes.js`
* Modify the `App.js` file
``` 
const App = () => (
  <BrowserRouter>
  <div>
    <Routes></Routes>
  </div>
  </BrowserRouter>
)

export default App;
```

### How to implement React-Redux-thunk?

` npm redux  react-redux redux-devtools-extension  redux-thunk`

* Create store 
```
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/index';
import thunk from 'redux-thunk';

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;

```
* create a Reducer and inside of `combineReducers` put your reducers of other place. 

```
import { combineReducers } from 'redux';

const reducer = combineReducers({})
export default reducer;
```
* implement `Provider` in `the idex.js` page
```
ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
```
* Using `useSelector` to get data from store, Using  `useDispatch` to dispath and action;
```
 const dispatch = useDispatch();
 const users = useSelector((state)=> state.users.usersById);
 
 useEffect(() => dispatch(fetchUsersById(1)),[]);
```





