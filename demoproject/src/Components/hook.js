import React, { useState, useEffect } from "react";

const btnStyle = {
    backgroundColor: 'orange',
    borderRadius: 50,
    fontSize: "33px",
    fontWeight: "bold"
}
function Employee() {
    
    const [name, setName] = useState("Virat Kohli")
    const [id, setId] = useState(123)
    const [salary, setSalary] = useState(50000)
    const [department, setDepartment] = useState("Traniee")
    const [show, setShow] = useState(true)

    //useEffect method
    useEffect(() => {
        console.log("calling useEffect method !!!", name, id, salary, department,)
    }, [name, id, salary, department])

    function UpdateEmployeeDetails() {
        setName("Rahul Dravid")
        setId(121)
        setSalary(10000)
        setDepartment("Website Development")
    }
    return (
        <div style={{ backgroundColor: "lightblue" }}>

            <h1>Hook</h1>
            {show ? <Child /> : <h1>Component has been removed!!!</h1>}
            <button style={btnStyle} onClick={() => setShow(false)}>Delete</button>
            <table align="center" border="1" style={{
                backgroundColor: "red",
                color: "black", fontFamily: "initial", width: "800px"
            }}>
                <thead>
                    <tr>
                        <th colSpan={2} style={{ backgroundColor: "royalblue", color: "white" }}><h1>EMPLOYEE DETAILS</h1></th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td><h1>Name:</h1></td><td><h1>{name}</h1></td></tr>
                    <tr><td><h1>Id:</h1></td><td><h1>{id}</h1></td></tr>
                    <tr><td><h1>Salary:</h1></td><td><h1>{salary}</h1></td></tr>
                    <tr><td><h1>Department:</h1></td><td><h1>{department}</h1></td></tr>
                    <tr><td colSpan="2"><button style={btnStyle} onClick={UpdateEmployeeDetails}>Update Employee Details</button></td><td></td></tr>
                </tbody>
            </table>
        </div>
    )
}
const Child = () => {
    return (
        <div>
            <h1>Child Component!!!</h1>
        </div>
    )
}
export default Employee;