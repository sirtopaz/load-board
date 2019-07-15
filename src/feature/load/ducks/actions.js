import { ACTIONS, FIXTURES } from './constants';

export const fetchLoadList = () => dispatch => {
  dispatch({ type: ACTIONS.LIST });

  // MOCK AN API CALL
  return Promise.resolve({ data: FIXTURES })
    .then(response => {
      if (response.data) {
        return dispatch({
          type: ACTIONS.LIST_RECEIVED,
          payload: response.data
        });
      }

      return Promise.reject(response);
    })
    .catch(response => {
      // TODO FUTURE handle error
    });
};

export const updateLoad = (loadId, changes) => (dispatch, getState) => {
  dispatch({ type: ACTIONS.UPDATE, loadId, changes });

  // MOCK AN API CALL
  return Promise.resolve()
    .then(() => {
      // MOCK AN UPDATE WITH FULL ITEM RETURN
      const { items } = getState().load;

      const item = {
        ...items[loadId],
        ...changes,
        updateAt: Date.now()
      };

      return {
        data: item
      };
    })
    .then(response => {
      if (response.data) {
        return dispatch({
          type: ACTIONS.GET_RECEIVED,
          payload: response.data
        });
      }

      return Promise.reject(response);
    })
    .catch(response => {
      // TODO FUTURE handle error
    });
};

// ----------------------------------------
// NOTE: as part of the spec we fake updates from the backend.. mocking a polling update here
const fakeBackendUpdate = () => (dispatch, getState) => {
  dispatch({ type: ACTIONS.GET });

  //choose a random item and toggle its locked flag

  const { items } = getState().load;
  const random = Math.floor(Math.random() * FIXTURES.length);
  const itemId = FIXTURES[random].id;

  const item = {
    ...items[itemId]
  };

  item.locked = !item.locked;

  dispatch({ type: ACTIONS.GET_RECIEVED, payload: item });
};

// set an an interval to poll
