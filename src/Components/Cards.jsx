import React from 'react';


function Cards(props){
    return(
        <div className="cards">
            <div className="close-btn" onClick={() => {props.onClicked(props.id)}} >&times;</div>
            <p>&rdquo;{props.quote}&rdquo;</p>
            <h3 className="cards-author">&#8275; {props.author} &#8275;</h3>
            
        </div>
    )
};

export default Cards;