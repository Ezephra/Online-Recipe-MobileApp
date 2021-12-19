import React from "react";
import { ScrollView } from 'react-native';
import { Result } from '../types';
import ResultItem from "./ResultItem";

interface ResultDataProps {
    results: Result[];
}

const ResultData = ({results}: ResultDataProps) => {
    return (
        <ScrollView>
            {results.map((result: Result) => {
                return <ResultItem result = {result} key={result.id}/>
            })}
        </ScrollView>
    )
}

export default ResultData;