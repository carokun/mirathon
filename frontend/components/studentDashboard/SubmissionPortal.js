import React, { Component } from 'react';
import { connect } from 'react-redux';

class SummaryInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className='notification'>
        <div className='tile is-parent'>
          <div className='tile is-child is-10'>
            <button className='button is-success'>
              <span className="icon">
                <i className="fa fa-download"></i>
              </span>
              <span>
                Case
              </span>
            </button>
          </div>
          <div className='tile is-child is-2' style={{display: 'flex', justifyContent: 'flex-end'}}>
            <button className='button is-info'>
              <span className="icon">
                <i className="fa fa-question"></i>
              </span>
            </button>
            <span style={{width: '4px'}}> </span>
            <button className='button is-danger'>
              <span className="icon">
                <i className="fa fa-upload"></i>
              </span>
            </button>
          </div>
        </div>
        <div className='tile is-parent'>
          <div className='tile is-child'>
            <hr />
            <table className='table is-striped is-fullwidth'>
              <tbody>
                <tr>
                  <td>
                    kdfjslkdfj
                  </td>
                </tr>
                <tr>
                  <td>
                    kdfjslkdfj
                  </td>
                </tr>
                <tr>
                  <td>
                    kdfjslkdfj
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default SummaryInfo;
