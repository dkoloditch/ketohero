import { connect } from 'react-redux';
import _ from 'lodash';

import { changeView } from '../actions';
import View from '../components/View';

import userData from '../data/users';

const  getCurrentUser = (users, userID) => {
  return _.find(users, { _userId: userID });
}

const mapStateToProps = (state) => {
  return {
    user: getCurrentUser(userData, state.userManager),
    view: state.viewManager
  }
}


const ViewContainer = connect(
  mapStateToProps
)(View)

export default ViewContainer;