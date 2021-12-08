import React from 'react';
import {CardItem, TitleName} from './styles';

const CardSeries = ({title = '', img = ''}) => {
    return (
      <CardItem img={img} data-testid="card-series">  
        <TitleName data-testid="title-card">{title}</TitleName>
      </CardItem>
    )
}

export default CardSeries;