import React from 'react';

function Category(props) {
    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', boxShadow: '0vh 0.5vh 0.7vh 0px rgba(0,0,0,0.3)', padding: '1vh 2vw', borderRadius: '2vh', marginBottom: '1.5vh' }}>
                <img style={{ height: '25vh' }} src={props.link} alt={props.name} />
                <span style={{ fontFamily: 'Poppins', fontSize: '3vh' }}>Rs. {props.price}</span>
            </div>
            <span style={{ fontFamily: 'Poppins', color: '#00E0C0', fontSize: '3vh' }}>{props.name}</span>
        </div>
    )
}

export default Category;