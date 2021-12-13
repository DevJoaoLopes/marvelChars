import React, { useEffect } from 'react';
import { Container, Wrapper, TitlePage } from './styles';
import CardSeries from '../../components/CardSeries';
import useSeries from '../../hooks/useSeries';
import { useParams } from 'react-router';
import Spinner from '../../components/Spinner';
import { GlobalStyles } from '../../styles/GlobalStyles';

const Details = () => {
  const params = useParams();
  const { series, fetchSeries } = useSeries(1, params.id);


  useEffect(() => {
    fetchSeries(1, params.id);
  }, []);
    
    
  return (
    series.length === 0 ? 
      <>
        <Spinner />
      </>
      :
      <>
        <Container data-testid="data-container">
          <TitlePage>Lista de Series</TitlePage>
          <Wrapper>
            {series.map((element) => (
              <CardSeries 
                key={element.id} 
                title={element.title} 
                img={element.thumbnail.path + '.' + element.thumbnail.extension} 
              />
            ))}
          </Wrapper> 
        </Container>
        <GlobalStyles />
      </>
  );
};

export default Details;
