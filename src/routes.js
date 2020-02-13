import React from 'react';
import  { BrowserRouter, Switch, Route} from 'react-router-dom';
import Lista from './pages/lista.js';
import Index from './pages/index.js';

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/Index" component={Index} />
                <Route path="/lista" component={Lista} /> 
            </Switch>
        </BrowserRouter>
    );
}
export default Routes