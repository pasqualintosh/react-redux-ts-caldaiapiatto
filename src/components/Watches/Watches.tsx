import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { IWatch, IWatchState } from './../../domains/watches/type';
import { IAppState } from '../../app/type';

interface IState {}
interface IProps {}

const Watches: React.FC<IProps> = ({}: IProps): JSX.Element => {
  const watches: readonly IWatch[] = useSelector<IAppState, Array<IWatch>>(
    (state: IAppState) => state.watchesState.watches,
    shallowEqual,
  );

  console.log(watches);

  return (
    <>
      {watches.map((watch: IWatch) => (
        <div key={watch.id}>
          <p>{watch.id}</p>
          <p>{watch.name}</p>
        </div>
      ))}
    </>
  );
};

export default Watches;
