import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const root = ReactDOM.createRoot(document.getElementById('root'));

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                getAllClients: {
                    merge(existing, incoming){
                        return incoming
                    }
                },
                getAllProjects: {
                    merge(existing, incoming){
                        return incoming
                    }
                }
            }
        }
    }
})

const apolloClient = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache
})

root.render(
  <React.StrictMode>
      <ApolloProvider client={apolloClient}>
          <App />
      </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
