import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login/index';
import { LOGIN_USER } from './utils/mutations';
import SignUp from './pages/SignUp/index';
import Footer from './components/Footer/Footer';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<SignUp />}
            /> 
            <Route
              path='*'
              element={<h1>Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>

      <Footer />
    </ApolloProvider>
  );
}

// Rainbow Mouse Trail for Cursor
window.addEventListener("mousemove", function (e) {
  var to_append = document.getElementsByClassName('loader-container')[0];
  var all = document.getElementsByClassName('loader-container');

  var parent_div = document.createElement('div');
  parent_div.className = "loader-container";
  var inner_div = document.createElement('div');
  inner_div.className = "loader";
  parent_div.appendChild(inner_div)
  var d = document.body.appendChild(parent_div);

  parent_div.style.left = (e.clientX - 50)+'px';
  parent_div.style.top = (e.clientY - 50)+'px';

  if(document.getElementsByClassName('loader-container').length > 50) {
    document.body.removeChild(to_append)
  }
});


export default App;
