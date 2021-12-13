import React from 'react';
import { ContainerLoader } from './styles';
import Loader from 'react-loader-spinner';

const Spinner = () => {
  return (
    <ContainerLoader data-testid="spinner">
      <Loader
        type="Oval"
        color="black"
        height={50}
        width={50}
        timeout={5000} //ms
      />
    </ContainerLoader>
  );
};

export default Spinner;
