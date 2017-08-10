import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import StudentProfileEditable from './StudentProfile/StudentProfileEditable';
import StudentProfilePublic from './StudentProfile/StudentProfilePublic';

import axios from 'axios';

class StudentProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      isOwnProfile: (this.props.user._id === this.props.match.params.id),
      student: null
    }
    this.startEdit = this.startEdit.bind(this);
    this.endEdit = this.endEdit.bind(this);

  }

  componentDidMount() {
    axios.get('/api/user/' + this.props.match.params.id)
    .then(response => {
      if (!response.data.user || response.data.user.type !== 'student') {
        this.props.history.push('/error');
      }
      this.setState({
        student: response.data.user
      })
    })
  }


  startEdit() {
    this.setState({edit: true})
  }

  endEdit() {
    this.setState({edit: false})
  }

  isEditing() {
    if (!this.state.student) {
      return <div></div>;
    } else if (this.state.edit && this.state.isOwnProfile) {
      return <StudentProfileEditable endEdit={this.endEdit} id={this.props.match.params.id} student={this.state.student}/>
    } else {
      return <StudentProfilePublic isOwnProfile={this.state.isOwnProfile} startEdit={this.startEdit} id={this.props.match.params.id} student={this.state.student}/>
    }
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        transitionName="smallfade"
        transitionAppear={true}
        transitionAppearTimeout={350}
        transitionEnter={false}
        transitionLeave={false}>
      <div>
        {this.isEditing()}
      </div>
    </ReactCSSTransitionGroup>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentProfile);
