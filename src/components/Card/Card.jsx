import React from 'react';
import { useNavigate } from 'react-router';
import { CardItem, TitleName } from './styles';

const Card = ({ id ='', name = '', img = '' }) => {

  const navigate = useNavigate();

  const goDetails = () => {
    navigate(`/details/${id}`);
  };

  return (
    <CardItem onClick={() => goDetails()} img={img} data-testid="card">  
      <TitleName>{name}</TitleName>
    </CardItem>
  );
};

export default Card;