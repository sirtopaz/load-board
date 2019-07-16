import { connect } from 'react-redux';

import { fetchLoadList } from './ducks/actions';
import LoadGrid from './LoadGrid';

const mapStateToProps = state => {
  const { loading, idList, items } = state.load;

  return {
    loading,
    idList,
    items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMount: () => {
      dispatch(fetchLoadList());
    }
  };
};

const LoadGridContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadGrid);

export default LoadGridContainer;
