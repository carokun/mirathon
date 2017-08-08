import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Login from '../views/Login';
import Register from '../views/Register';

import StudentNavbar from '../views/StudentNavbar';
import StudentRegister from '../views/StudentRegister';
import StudentDiscover from '../views/StudentDiscover';
import StudentDashboard from '../views/StudentDashboard';
import StudentProfile from '../views/StudentProfile';
import StudentCompetition from '../views/StudentCompetition';

import CompanyNavbar from '../views/StudentNavbar';
import CompanyRegister from '../views/CompanyRegister';
import CompanyProfile from '../views/CompanyProfile/CompanyProfile';
import CompanyHome from '../views/CompanyHome';
import CompanyCompetition from '../views/CompanyCompetition.js';

import ClubNavbar from '../views/StudentNavbar';
import ClubRegister from '../views/ClubRegister';
import ClubHome from '../views/ClubHome';
import ClubProfile from '../views/ClubProfile';

import axios from 'axios';


import { BrowserRouter, Route } from 'react-router-dom';

import { authenticateUser } from '../actions/AuthActions';

class AppContainer extends React.Component {
  componentWillMount() {
    this.props.authenticateUser();
  }

  findType() {
    if (!this.props.user.type) {
      return (<div>
        <Route path='/' exact component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/register/student' exact component={StudentRegister} />
        <Route path='/register/club' exact component={ClubRegister} />
        <Route path='/register/company' exact component={CompanyRegister} />
      </div>);
    } else if (this.props.user.type === 'student') {
      return (<div>
        <Route path='/' component={StudentNavbar}/>
        <Route path='/profile/student/:username' exact component={StudentProfile} />
        <Route path='/profile/club/:id' exact component={ClubProfile} />
        <Route path='/profile/company/:id' exact component={CompanyProfile} />
        <Route path='/home' exact component={StudentDashboard} />
        <Route path='/competition/:id' exact component={StudentCompetition} />
        <Route path='/discover' exact component={StudentDiscover} />
      </div>);
    } else if (this.props.user.type === 'company') {
      return (<div>
        <Route path='/' component={CompanyNavbar}/>
        <Route path='/profile/student/:username' exact component={StudentProfile} />
        <Route path='/profile/club/:id' exact component={ClubProfile} />
        <Route path='/profile/company/:id' exact component={CompanyProfile} />
        <Route path='/competition/:id' exact component={CompanyCompetition} />
        <Route path='/home' exact component={CompanyHome} />

      </div>);
    } else if (this.props.user.type === 'club') {
      return (<div>
        <Route path='/' component={ClubNavbar}/>
        <Route path='/profile/student/:username' exact component={StudentProfile} />
        <Route path='/profile/club/:id' exact component={ClubProfile} />
        <Route path='/profile/company/:id' exact component={CompanyProfile} />
        <Route path='/competition/:id' exact component={CompanyCompetition} />
        <Route path='/home' exact component={ClubHome} />
      </div>);
    }
  }

  render() {
    return (
      <BrowserRouter>
          {this.findType()}
      </BrowserRouter>
    );
  }
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      authenticateUser: () => dispatch(authenticateUser())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
