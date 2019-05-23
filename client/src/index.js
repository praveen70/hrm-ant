import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as serviceWorker from "./serviceWorker";


const cache = new InMemoryCache();
const client = new ApolloClient({
  uri:`http://localhost:4444/graphql`,
  cache,
  fetchOptions: {
    credentials: "include"
  },
  request: operation => {
    const token = localStorage.getItem("token");
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  },
  onError: ({ networkError, graphQLErrors}) => {
    if (networkError) {
      console.log("Network Error", networkError);
      console.log("graphQLErrors", graphQLErrors)
    }
  }
});

// const Root =() =>(
//     <div>
//      <Router>
//      <Switch>

//         <Route exact path="/" component={Login} />
//         <Route path="/home" component={Home} />
//         <Route path="/CreateEmployee" component={CreateEmployee} />
//         </Switch>
//         </Router>
//         </div>
// );

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
  <ApolloProvider client={client}>
    <Root /> 
    {/* <Spinner /> */}
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
