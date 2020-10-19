import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


class CandidiateQuestionaire extends React.Component {
  // The questions need to come from the database
  render() {
    return (
      <form>
        <h1> Questions </h1>
      </form>
    )
  }
}

class JobForm extends React.Component {
  render() {
    return (
      <form>
        <h1> Job details </h1>
      </form>
    )
  }
}

class AllJobs extends React.Component{
  render() {
    return (
      <h1> Return all jobs with candidates link here </h1>
    )
  }
}

class AllCandidates extends React.Component {
  render() {
    return (
      <h1> All candidates with job links here </h1>
    )
  }
}

class HomePage extends React.Component {
  render() {
    return (
      <h1> Home page items go here </h1>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
