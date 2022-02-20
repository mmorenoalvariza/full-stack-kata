import {useEffect, useState} from "react";
import axios from "axios";
const BASE_URL='http://localhost:8090/api';
const useRestoApi = (endpoint) => {
    const [pageData, setPageData] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [searchVal, setSearchVal] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/${endpoint}?search=${searchVal}&p=${pageNum}`)
            .then(res => {

                res.data.data.sort(({ratingScore : ratingA }, {ratingScore: ratingB}) => ratingB - ratingA)
                console.log(res.data);
                setPageData(res.data)
                setError(false);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [searchVal, pageNum]);

    const handlePrev = () => {
       if(pageNum > 1) {
            setPageNum(oldNum => oldNum - 1);
        }
    }
    const handleNext = () => {
        if(pageNum < pageData.totalPages) {
            setPageNum(oldNum => oldNum + 1);
        }
    }
    console.log(pageData);
    return {data: pageData, loading, searchVal, setSearchVal, error, handleNext, handlePrev};
}

export default useRestoApi;