import React from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './styles/main.scss'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'
import { ProductView } from './components/Products/ProductView'
//React route 
import { HashRouter as Router,Route,Link,Switch} from 'react-router-dom'

import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
     <GlobalProvider>
      <Router>
        <main>
      <Header />
        <Switch>
          <div>
          <Route exact path="/" component={ProductView} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register/" component={Register} />
          </div>
        </Switch>
      <Footer />
      </main>
      </Router>
      </GlobalProvider>
    
  );
}

export default App;
