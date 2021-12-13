import React, { useEffect, useMemo, useState } from 'react';
import Card from '../../components/Card';
import { Container, Wrapper, TitlePage, Searchbar, ViewSearch } from './styles';
import { GlobalStyles } from '../../styles/GlobalStyles';
import Spinner from '../../components/Spinner';
import useChars from '../../hooks/useChars';
import Pagination from '../../components/Pagination';
import usePagination from '../../hooks/usePagination';
import SearchIcon from '../../assets/img/search.png';


const Home = () => {
  const [search, setSearch] = useState('');
  const { chars, fetchChars } = useChars(1);
  const { actualPage, setActualPage } = usePagination();


  useEffect(() => {
    fetchChars(actualPage);
  }, [actualPage]);

    
  const filterChars = useMemo(() => {
    const lowerSearch = search.toLowerCase();
    return chars.filter((char) => 
      char.name.toLowerCase().includes(lowerSearch)
    );
  }, [search, chars]);

  return (
    chars.length === 0 ? 
      <>
        <Spinner />
      </>
      :
      <>
        <Container data-testid="data-container">
          <TitlePage>Lista de personagens</TitlePage>
          <ViewSearch>
            <Searchbar 
              img={SearchIcon} 
              placeholder="Search..."
              value={search}
              onChange={(ev) => {setSearch(ev.target.value);}}
            />
          </ViewSearch>
          <Wrapper>
            {filterChars.map((element) => (
              <Card 
                key={element.id} 
                id={element.id}
                name={element.name} 
                img={element.thumbnail.path + '.' + element.thumbnail.extension} 
              />
            ))}
            <Pagination 
              disablePreview={actualPage < 2}
              clickNext={() => setActualPage(parseInt(actualPage) + 1)} 
              clickPreview={() => setActualPage(parseInt(actualPage) - 1)} 
            />
          </Wrapper> 
        </Container>
        <GlobalStyles />
      </>
  );
};

export default Home;
