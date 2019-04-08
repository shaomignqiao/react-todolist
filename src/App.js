import React from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import Home from './Home';
import demo from './router/demo';
import Page1 from './router/Page1';
import reactState from './router/reactState';
import props from './router/props';
import parentChild from './router/parentChild';
import reactEvent from './router/reactEvent';
import Conditiona from './router/conditiona';
import reactListsKeys from './router/reactListsKeys';
import componentApi from './router/componentApi';
import componentLife from './router/componentLife';
import reactAjax from './router/reactAjax';
import formsEvents from './router/formsEvents';
import reactRefs from './router/reactRefs';
import calculator from './router/calculator';
import splitPane from './router/splitPane';
import welcomeDialog from './router/welcomeDialog';
import filterableProductTable from './router/filterableProductTable';
import uncontrolled from './router/uncontrolled';
import fileApi from './router/fileApi';
import todoList from './router/todoList';

class App extends React.Component {
	render(){
		return(
			<Router>
                <div className="root-container">
                    <Route exact path="/" component = { Home } />
                    <Route path="/demo" component = { demo } />
                    <Route path="/Page1" component = { Page1 } />
                    <Route path="/reactState" component = { reactState } />
                    <Route path="/props" component = { props } />
                    <Route path="/parentChild" component = { parentChild } />
                    <Route path="/reactEvent" component = { reactEvent } />
                    <Route path="/Conditiona" component = { Conditiona } />
                    <Route path="/reactListsKeys" component = { reactListsKeys } />
                    <Route path="/componentApi" component = { componentApi } />
                    <Route path="/componentLife" component = { componentLife } />
                    <Route path="/reactAjax" component = { reactAjax } />
                    <Route path="/formsEvents" component = { formsEvents } />
                    <Route path="/reactRefs" component = { reactRefs } />
                    <Route path="/calculator" component = { calculator } />
                    <Route path="/splitPane" component = { splitPane } />
                    <Route path="/welcomeDialog" component = { welcomeDialog } />
                    <Route path="/filterableProductTable" component = { filterableProductTable } />
                    <Route path="/uncontrolled" component = { uncontrolled } />
                    <Route path="/fileApi" component = { fileApi } />
                    <Route path="/todoList" component = { todoList } />
                </div>
            </Router>
		)
	}
}
export default App;