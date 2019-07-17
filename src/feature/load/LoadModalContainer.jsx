import { connect } from 'react-redux';

import { updateLoad } from './ducks/actions';
import LoadModal from './LoadModal';

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
      dispatch(updateLoad(props.id, changes));
    }
  };
};

const LoadModalContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadModal);

export default LoadModalContainer;
