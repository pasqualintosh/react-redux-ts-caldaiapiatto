import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

import { addWatch } from './../../domains/watches/ActionCreators';
import { IWatch } from './../../domains/watches/type';

interface IState {
  watch: IWatch;
}
interface IProps {}

const AddWatch: React.FC<IProps> = ({}: IProps): JSX.Element => {
  const [watch, setWatch] = React.useState<IState['watch'] | {}>();
  const dispatch: Dispatch<any> = useDispatch();

  const saveWatch = React.useCallback(
    (watch: IWatch | any) => dispatch(addWatch(watch)),
    [dispatch],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    try {
      setWatch({
        ...watch,
        [event.currentTarget.id]: event.currentTarget.value,
      });
    } catch (error) {
      console.warn(error);
    }
  };

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    try {
      saveWatch(watch);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <div>
      <input
        name={'id'}
        id={'id'}
        type={'text'}
        placeholder={'watch id'}
        onChange={event => handleChange(event)}
      />
      <input
        name={'name'}
        id={'name'}
        type={'text'}
        placeholder={'watch name'}
        onChange={event => handleChange(event)}
      />
      <br />
      <button onClick={event => handleClick(event)}>save</button>
    </div>
  );
};

export default AddWatch;
