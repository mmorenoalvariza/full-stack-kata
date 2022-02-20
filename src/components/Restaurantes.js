import React from "react";
import Restaurant from "./Restaurant";
import useRestoApi from "../hooks/UseRestoApi";


const Restaurantes = () => {
    const {data, loading, error, searchVal, setSearchVal, handleNext, handlePrev} = useRestoApi('restaurants');

    return <>
        <input type={"text"} placeholder={'Buscar'} value={searchVal} onChange={(e) => setSearchVal(e.target.value)}/>
        {error && <div>Error</div>}
        <button onClick={handlePrev}>Prev</button><button onClick={handleNext}>Next</button>
        {!loading && <div style={{display: 'flex', gap: '10px', width: '80%', flexWrap: 'wrap'}}>
            {data.data.map(resto => <Restaurant key={resto.id} resto={resto} />)}</div>}
    </>
};

export default Restaurantes;