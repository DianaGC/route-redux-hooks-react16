import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom';
import Users from './modules/users/pages/Users'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/users' component={Users}/>
                <Route path='/photos' component={Users}/>
                <Redirect to='/users'></Redirect>
            </Switch>
         </BrowserRouter>
    )
}
export default Routes;
