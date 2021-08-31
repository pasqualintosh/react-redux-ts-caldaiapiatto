export interface IWatch {
  id: string;
  name: string;
}

export interface IWatchState {
  watches: Array<IWatch>;
}

export interface IWatchAction {
  type: string;
  wacth: IWatch;
}

export type DispatchType = (args: IWatchAction) => IWatchAction;
