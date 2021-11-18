import React,{Component} from "react";


const Vaccinated = Person => {
    class VaccinatedPerson extends Component {
        render(){
            return(
                <Person hocgrade="Certified" />
            )
        }

    }


return VaccinatedPerson;

}


