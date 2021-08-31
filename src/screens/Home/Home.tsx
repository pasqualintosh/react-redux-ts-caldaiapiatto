import React from 'react';
import AddWatch from '../../components/AddWatch/AddWatch';
import Watches from '../../components/Watches/Watches';

interface IState {}
interface IProps {}

const Home: React.FC<IProps> = ({}: IProps): JSX.Element => {
  return (
    <>
      <AddWatch />
      <Watches />
    </>
  );
};

export default Home;
