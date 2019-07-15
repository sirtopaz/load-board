import { connect } from 'react-redux';

import { fetchLoadList } from './ducks/actions';
import LoadBoardView from './LoadBoardView';

const mapStateToProps = state => {
  const { loading, idList } = state.load;

  return {
    loading,
    idList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => {
      dispatch(fetchLoadList());
    }
  };
};

const LoadBoardViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadBoardView);

export default LoadBoardViewContainer;
