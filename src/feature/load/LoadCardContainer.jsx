import { connect } from 'react-redux';

import { fetchLoadList } from './ducks/actions';
import LoadCard from './LoadCard';

const mapStateToProps = (state, props) => {
  const { items } = state.load;
  const item = items[props.id];

  return {
    item
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onChange: changes => {
      dispatch(fetchLoadList(props.id, changes));
    }
  };
};

const LoadCardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadCard);

export default LoadCardContainer;
