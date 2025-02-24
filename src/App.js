import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Heade from './components/layout/Heade';
import About from './components/pages/About';
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NotFound from './components/pages/NotFound';
import Test from './components/Test/Test';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Heade branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route exact path="/test" component={Test} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
