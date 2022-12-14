import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { useQuery } from '@apollo/client';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login/index';
import { LOGIN_USER } from './utils/mutations';
import { GET_TODOS } from './utils/queries';
import SignUp from './pages/SignUp/index';
import Footer from './components/Footer/Footer';
import 'animate.css';



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
  const{loading,error,data}=useQuery(GET_TODOS);
	if(loading) return<p>Loading.........</p>
	// if(error) return <p>{error.message}</p>
	console.log(data);
 
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <h1 className="animate__animated animate__bounce">Test</h1>
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





export default App;
