import { ACTIONS } from './constants';

const INITIAL_STATE = {
  loading: false,
  idList: [],
  items: {}
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET:
    case ACTIONS.LIST: {
      return {
        ...state,
        loading: true
      };
    }

    case ACTIONS.LIST_RECEIVED: {
      const items = {
        ...state.items
      };

      const idList = action.payload.map(item => {
        items[item.id] = item;

        return item.id;
      });

      return {
        ...state,
        loading: false,
        idList,
        items
      };
    }

    case ACTIONS.GET_RECEIVED: {
      const { payload } = action;

      const items = {
        ...state.items
      };
      items[payload.id] = payload;

      return {
        ...state,
        loading: false,
        items
      };
    }

    default:
      return state;
  }
};
