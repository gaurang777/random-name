import React , {Component} from 'react'

class Student extends Component{
 render(){
     return(
         <div>
             <h1 style={{color:'green'}}>STUDENT DETAILS</h1>
             {/* <Faculty name="Sunil Yadav" subject="Maths" education="B.Sc" salary={100001}/> */}
             
             <h1>Name:{this.props.name}</h1>
             <h1>RollNo:{this.props.rollno}</h1>
             <h1>Course:{this.props.course}</h1>
             <h1>Fees:{this.props.fees}</h1>
             <hr></hr>
         </div>
     )

 }

}
class Faculty extends Component{
    render(){
        return(
            <div>
                <h1 style={{color:'red'}}>FACULTY DETAILS</h1>
             <h1>Name:{this.props.name}</h1>
             <h1>Subject:{this.props.subject}</h1>
             <h1>Education:{this.props.education}</h1>
             <h1>Salary:{this.props.salary}</h1>
             <hr></hr>
            </div>

        )
    }
}
// export default Student;

export{Student,Faculty,};