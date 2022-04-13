import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Repos from './pages/Repos'
import Home from './pages/Home'
import Commits from './pages/Commits'
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'
import Navbar from './components/Navbar'
import GlobalStyle from './utils/style/GlobalStyle'
import { ThemeProvider, SurveyProvider } from './utils/context'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
          <GlobalStyle />
          <Navbar />
          {/* <Header /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/survey/:questionNumber">
              <Survey />
            </Route> */}
            { <Route 
              path="/projets/:id"
              render={(props) => <Commits {...props} />}
              />}
            {/* <Route path="/freelances">
              <Freelances />
            </Route> */}
            {/* <Route
              path="/profile/:id"
              render={(props) => <Profile {...props} />}
            /> */}
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
