import { useState } from 'react';
import api from '../services/api';
import hash from '../utils/hashKey';

export default function useChars() {
  const [chars, setChars] = useState([]);

  async function fetchChars(page) {
    const pageLimit = 20;
    const logicalPage = (page - 1) * pageLimit;
    const virtualPage = logicalPage <= 0 ? 0 : logicalPage;

    const response = await api.get('/characters', {
      params: {
        apikey: process.env.REACT_APP_PUBLIC_API_KEY,
        hash: hash(),
        ts: process.env.REACT_APP_TIMESTAMP,
        offset: virtualPage,
        limit: pageLimit
      } });

    setChars(response.data.data.results);
  }

  return {
    fetchChars,
    chars
  };
}