import React, { Component } from 'react';
import { connect } from 'react-redux';

import Notification from './Notification.js';
import CurrentCompetition from './CurrentCompetition.js';

class NoCompetitions extends Component {
  render() {
    return (
      <div className="center">
        <p>You are currently not enrolled in any case competitions <br/><p style={{fontSize: '30px'}}>😟</p><br/>
          Checkout some of our recommendations and get started! <br/><p style={{fontSize: '30px'}}>👉</p><br/> </p>
      </div>
    )
  }
};

class SummaryInfo extends Component {
  constructor(props) {
    super(props);
    this.state ={
      isCompeting: false,
    }

  }

  render() {
    return (
      <article className='tile is-child notification is-tile'>
        <div style={{height: '30px', width: '1px'}}></div>
        <h1 className='title is-4'>👋🏼 Welcome Caroline!</h1>
        <div style={{height: '30px', width: '1px'}}></div>
        <h3 className='subtitle is-5'>Your Current Competitions</h3>
        <hr/>
        <NoCompetitions />
        <CurrentCompetition />
        <div style={{height: '30px', width: '1px'}}></div>
        <h3 className='subtitle is-5'>Notifications</h3>
        <hr/>
        <Notification />
      </article>

    )
  }
}

export default SummaryInfo;