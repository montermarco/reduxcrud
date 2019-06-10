import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Redux
import { Provider }  from 'react-redux';
import store from './store';

//components
import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>

            <Header />


            <div className="container">
              <Switch>
                  <Route exact path="/" component={Products} />
                  <Route exact path="/product/add" component={AddProduct} />
                  <Route exact path="/product/edit/:id" component={EditProduct} />
              </Switch>
            </div>

          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
