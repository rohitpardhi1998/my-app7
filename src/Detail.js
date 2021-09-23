import React from 'react';

function Detail(props) {
    return (
        <div>
            <h1>{props.Name}</h1>
            <h1>{props.Email}</h1>
            <h1>{props.Age}</h1>
        </div>
    )
}
export default Detail;