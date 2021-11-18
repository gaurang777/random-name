import React, { Component } from 'react'
import Vaccinated from './VaccinatedPerson ';

 class Aman extends Component {
    constructor(props) {
        super(props)

        this.state = {
            vaccinated:"True",
            vaccine:"Covishield",
            
            
        }
    }

    notVaccinated = () => {
        this.setState({
            vaccinated:"False",
           


        })
    }
render() {
        return (
            <div>
                <h1>
                    Aman's :- <br></br>
                    Vaccinated:{this.state.vaccinated} <br></br>
                    Vaccine:{this.state.vaccine}
                </h1>
                <button onClick={this.state.vaccined}>CheckVaccination</button>
            </div>
        )
    }
}


export default Vaccinated(Aman);
