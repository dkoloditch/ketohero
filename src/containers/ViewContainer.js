import { connect } from 'react-redux';
import { changeView } from '../actions';
import View from '../components/View';

const mapStateToProps = (state) => {
  return {
    view: state.viewManager
  }
}


const ViewContainer = connect(
  mapStateToProps
)(View)

export default ViewContainer;