import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY, API_SEARCH_RECIPE, API_SEARCH_QUERY } from "@env";
import { Results, Result } from '../types';
import ResultData from '../components/ResultData';

const SearchResult = ({route} : any) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Result[]>([]);
  const fullURL = API_SEARCH_RECIPE + API_KEY + API_SEARCH_QUERY + route.params.parmKey;

  const loadRecipe = async() => {
    try {
      setLoading(true);
      const response = await axios.get<Results>(fullURL)
      setData(response.data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      console.log(fullURL);
    } 
  }
  useEffect(() => {
    loadRecipe();
  }, []);

  return (
    <ResultData results={data}/>
  );

}

export default SearchResult;