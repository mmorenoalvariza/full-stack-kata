import React from "react";

const Restaurant = ({resto}) => {
    return <article style={{borderRadius: '10px', border: '1px solid black', display: 'flex', padding: '10px', columnGap: 10}}>
        <div>
            <img src={resto.logo} alt={resto.name} style={{width: 100, height: 100, borderRadius: '50%'}}/>
        </div>
        <div style={{width: '100%', flexDirection: 'column', display: 'flex', alignItems: 'flex-start', alignContent: 'space-around'}}>
            <div>{resto.name} {resto.shippingAmount}</div>
            <div>{resto.deliveryTime}</div>
        </div>
    </article>
}

export default Restaurant;