import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { GameScreen } from './components/StadtLandFrustComponents/GameScreen';
import { Slf } from './components/Slf';
import './custom.css'
import { VotingBoard } from './components/StadtLandFrustComponents/VotingBoard';


export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/gamescreen' component={GameScreen} />
        <Route path='/Slf' component={Slf} />
        <Route path='/VotingBoard' component={VotingBoard} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
    );
  }
}
