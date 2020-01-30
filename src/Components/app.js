import React from 'react';
import LoadHomepage from './LoadHomepage';
import LoadCreateInvoice from './LoadCreateInvoice';
import LoadUpdateInvoice from './LoadUpdateInvoice';
import LoadDisplayInvoice from './LoadDisplayInvoice';
import LoadAllInvoice from './LoadAllInvoice';
import LoadPageNotFound from './LoadPageNotFound';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';

export default class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <LoadHomepage/>
                </Route>
                <Route path='/createinvoice'>
                    <LoadCreateInvoice/>
                </Route>
                <Route path='/updateinvoice'>
                    <LoadUpdateInvoice/>
                </Route>
                <Route path='/displayinvoice'>
                    <LoadDisplayInvoice/>
                </Route>
                <Route path='/allinvoice'>
                    <LoadAllInvoice/>
                </Route>
                <Route>
                    <LoadPageNotFound/>
                </Route>

            </Switch>
            </BrowserRouter>
        );
    }
}