import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'query-string';


export default function usePagination() {

  const location = useLocation();
  const navigate = useNavigate();

  const [actualPage, setActualPage] = useState(
    getActualPage() || 1
  );

  function getActualPage(){
    const queryParams = qs.parse(location.search);
    const page = queryParams.page;
    return page ? page : undefined;
  }

  useEffect(() => {
    const queryParams = qs.parse(location.search);
    const stringParams = qs.stringify({ ...queryParams, page: actualPage });
    navigate(`/?${stringParams}`);

  }, [actualPage]);

    

  return {
    setActualPage,
    actualPage
  };
}