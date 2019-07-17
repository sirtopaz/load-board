import { connect } from 'react-redux';

import { fakeBackendUpdate } from '../../feature/load';
import App from './App';

const mapStateToProps = (state, props) => {
  const { updatedAt } = state.load;

  return {
    updatedAt
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateCheck: changes => {
      dispatch(fakeBackendUpdate(props.id, changes));
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
