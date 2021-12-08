import {useState} from 'react'
import api from '../services/api';
import hash from '../utils/hashKey';

export default function useSeries() {
    const [series, setSeries] = useState([]);

    async function fetchSeries(page, idChar) {
        const pageLimit = 20;
        const logicalPage = (page - 1) * pageLimit;
        const virtualPage = logicalPage <= 0 ? 0 : logicalPage;

        const response = await api.get(`/characters/${idChar}/series`, {
            params: {
                apikey: process.env.REACT_APP_PUBLIC_API_KEY,
                hash: hash(),
                ts: process.env.REACT_APP_TIMESTAMP,
                offset: virtualPage,
                limit: pageLimit
        }});
        
        setSeries(response.data.data.results);
    }

    return {
        fetchSeries,
        series
    }
}