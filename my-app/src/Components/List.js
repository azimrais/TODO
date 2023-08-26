import React from 'react'

function List(props) {
    return( 
    <>
    <div className='main-list'>
    <div className='list-style'>
    <li>{props.item}</li>
    </div>
    <i className="fa-solid fa-x" onClick={()=>{
        props.onSelect(props.id);
    }}/>
    </div>
    </>
    )
};

export default List;
