import React from 'react';

function Footer(){

    const time     = new Date(); 
    const year    = time.getFullYear();
    
    let day     = time.getDate();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "Septeber", "October", "November", "December"];
     const month   = monthNames[time.getMonth()];
     if (day.toString().length === 1) {
         day = `0${day}`;
     };

     const date =   `${year}.${month}.${day}`;


    return(
        <div className="footer">
            <h1>{date}</h1>
            <p>© Copyright</p>
        </div>
    )
};

export default Footer;