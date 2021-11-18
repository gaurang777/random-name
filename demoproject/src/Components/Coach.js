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
export default Coach;