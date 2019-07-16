import { connect } from 'react-redux';

import { fetchLoadList } from './ducks/actions';
import LoadBoard from './LoadBoard';

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

const LoadBoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadBoard);

export default LoadBoardContainer;
