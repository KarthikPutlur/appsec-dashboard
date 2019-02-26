import React from 'react'
import Ticker from 'react-ticker'
 
const MoveStuffAround = () => (
    <Ticker speed={35} mode={"smooth"} offset={0} >
        {({ index }) => ( 
            <p class="f1 lh-title white-90 mw9 fw5 "> Appsec Lunch and Learn session "Beat the Hacker" this March 12th. Free Pizzas :-) Limited seats. RSVP quickly.  </p>
                 
            
        )}
    </Ticker>
)
 


export default MoveStuffAround