import React, { Component } from 'react';


class CompetitionCard extends Component {
  render() {
    return(
      <div className="card" style={{margin: '10px', boxShadow: '0 2px 3px rgba(10, 10, 10, 0.1), 0 0 20px 0px rgba(204, 204, 204, 0.1)'}}>
        <header className="card-header">
          <p className="card-header-title">
            <a style={{color: '#F2BE64'}}>Competition Title</a>
          </p>
          <small className="card-header-icon">05/27/2017 - 05/30/2017</small>
        </header>
        <div className="card-content" >
          {/* //ellipses is broken */}
          <div className="content" style={{height: '50px', whiteSpace: 'wrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>
            Brief Description. This is a super brief description of the competition like this should be like roughly 500 characters or so and we can truncate using elipses.
          </div>
        </div>
      </div>
    )
  }
}

class CompetitionRecordEdit extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return(
      <div className='tile is-parent is-vertical' style={{backgroundColor: 'transparent'}}>
          <article className="tile is-child" style={{backgroundColor: 'transparent'}}>
            <p className="title is-2" style={{color: 'white'}}>Open Competitions</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              {this.props.user.competitions
              .filter(comp => {
                return new Date(comp.endDate) >= new Date()
              })
              .map(comp => {
                return <CompetitionCard comp={comp}/>
              })}
            </div>
          </article>
          <article className="tile is-child" style={{backgroundColor: 'transparent'}}>
            <p className="title is-2" style={{color: 'white'}}>Past Competitions</p>
            <div style={{display: 'flex', flexDirection: 'row'}}>
              {this.props.user.competitions
              .filter(comp => {
                return new Date(comp.endDate) < new Date()
              })
              .map(comp => {
                return <CompetitionCard comp={comp}/>
              })}
            </div>
          </article>
      </div>
    )
  }
}

export default CompetitionRecordEdit;
