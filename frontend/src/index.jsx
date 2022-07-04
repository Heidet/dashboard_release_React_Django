import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Projet from './pages/Projet'
import Footer from './components/Footer'
import Error from './components/Error'
import Navbar from './components/Navbar'
import GlobalStyle from './utils/style/GlobalStyle'
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProviderLocal, SurveyProvider } from './utils/context'

ReactDOM.render(
    <Router>
      <ThemeProviderLocal>
        <SurveyProvider>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route exact path="/Dashboard">
              <Home />
            </Route>
            {/* <Route path="/todos">
              <Todos />
            </Route> */}
            <Route 
              path="/projet/:id"
              render={(props) => <Projet {...props} />}
              />
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </SurveyProvider>
      </ThemeProviderLocal>
    </Router>,
  document.getElementById('root')
)
