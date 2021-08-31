import { IWatchAction, IWatch, DispatchType } from './type';
import * as ActionTypes from './ActionTypes';

export function addWatch(watch: IWatch) {
  const action: IWatchAction = {
    type: ActionTypes.ADD_WATCH,
    wacth: watch,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
