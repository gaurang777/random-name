import React from 'react';

function CricketPlayer(props)
{
    return (
        
            <div style = {{backgroundColor:'royalblue',color:'black'}}>
                {/* <Coach Name= "Kapil Dev" Team= "India"/> */}
                <h1>PLAYER DETAILS</h1>
                <h1>Name:{props.name}</h1>
                <h1>NoOfODIMatches:{props.NoOfODIMatches}</h1>
                <h1>NoOfTestMatches:{props.NoOfTestMatches}</h1>
                <h1>Score:{props.Score}</h1>
                <h1>Team:{props.Team}</h1>
                <hr></hr>
                </div>
       
    )
}
const Coach = (props)=> {
    return (
            <div style = {{backgroundColor:'olive',color:'white'}}>
                <h1>Coach DETAILS</h1>
                <h1>Name:{props.Name}</h1>
                <h1>Team:{props.Team}</h1>
                <hr></hr>
                </div>
    )
}
// export default CricketPlayer;
export {CricketPlayer,Coach};
