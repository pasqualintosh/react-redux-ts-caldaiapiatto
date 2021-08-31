import { IWatchState, IWatchAction, IWatch } from './type';
import * as ActionTypes from './ActionTypes';
import defaultState from './DefaultState';

const reducer = (
  state: IWatchState = defaultState,
  action: IWatchAction,
): IWatchState => {
  switch (action.type) {
    case ActionTypes.ADD_WATCH:
      const newWatch: IWatch = action.wacth;
      return {
        ...state,
        watches: [...state.watches, newWatch],
      };

    default:
      return state;
  }
};

export default reducer;
