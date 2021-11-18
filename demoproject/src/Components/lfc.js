// : 4: - (LifeCycleOfComponent)
// Create Car Class Component with using constructor variables brand, model, color,
//  year and display data.Now change state like variable color on button clickevent using eventhandling 
// and call all the life cyle methods like componentDidMount() etc.
// Q:4:- (LifeCycleOfComponent)
// Create Car Class Component with using constructor variables brand, model, color, year and display data.
//Now change state like variable color on button clickevent using eventhandling
//and call all the life cyle methods like componentDidMount() etc.
import React, { Component } from 'react'

const btnStyle = {
    backgroundColor: 'gold',
    borderRadius: 50,
    fontSize: "32px",
}
const myhead = {
    backgroundColor: 'gold',
    color: 'white',
}
const tbr = {
    backgroundColor: 'gold'
}
const btn ={
    backgroundColor:'pink',
    borderRadius:50,
    fontSize:'32px',
    margin:'30',
}
export default class Car_LifeCycleOfComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            //  brand: this.props.brand,
            //  model: this.props.model,
            //  color: this.props.color,
            //  year: this.props.year,
            brand: "Mahindra",
            model: "XUV5oo",
            year: "2021",
            color: "black",
            carImage: "https://th.bing.com/th/id/OIP.8d6oFr_gdHwLTi6lDvFxrwHaEL?pid=ImgDet&rs=1",
            Car_price: 2173600,
            show: true
        }
        console.log("calling constructor()!!!")
    }
    static getDerivedStateFromProps(props, state) {
        console.log("Calling getDerivedStateFromProps()!!!")
        return state.Car_price
    }
    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    componentDidMount() {
        console.log("calling componentDidMount()!!")
        setTimeout(() => {
            this.setState({
                Car_price: this.state.Car_price + 4000
            })
        }, 2000)
    }
    shouldComponentUpdate() {
        console.log("calling shouldComponentUpdate!!")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("calling getSnapshotBeforeUpdate!!")
        document.getElementById('div1').innerHTML = "<h1>Before Update:" + prevState.Car_price + "</h1>"
        return prevState.Car_price
    }
    componentDidUpdate() {
        console.log("calling componentDidUpdate!!")
        document.getElementById('div2').innerHTML = "<h1>After Update:" + this.state.Car_price + "</h1>"
    }
    updatePrice = () => {
        this.setState({
            Car_price: this.state.Car_price + 4000
        })
    }
    changeCarColor = () => {
        const newColor = this.getRandomColor()
        this.setState({
            color: newColor
        })
    }
    delChild = () => {
        this.setState({
            show: false
        })
    }
    // getCarDetails() {
    //     this.state(
    //         {
    //             brand: carDetails.brand,
    //             model: carDetails.model,
    //             color: carDetails.color,
    //             year: carDetails.year
    //         }
    //     )
    // }
    render() {
        return (
            <div style={{ backgroundColor: "orange" }}>
                <h1 style={myhead}><marquee>Hello Welcome to React Tutorial!!!</marquee></h1>
                <h1>Assignment LifeCycle Of Component!!</h1>

                <a href={this.state.carImage}>
                    <img src={this.state.carImage}></img></a>
                <table align="center" border="1" style={{
                    backgroundColor: "green", fontSize: 28,
                    fontWeight: "bold", width: "800px"
                }} className="styled-table">
                    <thead>
                        <tr style={tbr}>
                            <th colSpan={2}>Car Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Brand</td>
                            <td>{this.state.brand}</td>
                        </tr>
                        <tr>
                            <td>Model</td>
                            <td>{this.state.model}</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td style={{ backgroundColor: this.state.color }}><p></p></td>
                        </tr>
                        <tr>
                            <td>Year</td>
                            <td>{this.state.year}</td>
                        </tr>
                        <tr>
                            {/* <td><button className="carButton"
                                style={btnStyle}
                                onClick={this.getCarDetails.bind(this)}>Get Car Details</button></td> */}
                            <td colSpan="2"><button style={{ fontSize: 18, fontWeight: "bold" }} className="carButton"
                                style={btnStyle}
                                onClick={this.changeCarColor}>Available Color</button></td><td></td>
                        </tr>

                    </tbody>
                </table>
                <h1>Car Price in Rs:{this.state.Car_price}</h1>
                <div id="div1"></div>
                <div id="div2"></div>
                {this.state.show ? <Child /> : <h1>Child Component has been removed!!</h1>}
                <button style={btnStyle} onClick={this.updatePrice}>UpdatePrice</button> &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button style={btnStyle} onClick={this.delChild}>Delete</button>
                <div>
                <button style={btn}
        onClick={() => {
          this.delChild();
          this.updatePrice();
          this.changeCarColor();
        }}>
        All Event
      </button> &nbsp;&nbsp;&nbsp;&nbsp;
      <br></br>
                </div>

            </div>
        )
    }
}
class Child extends React.Component {
    componentWillUnmount() {
        console.log("calling componentWillUnmount!!")
    }
    render() {
        return (
            <h1>Child Component!!!</h1>
        )
    }
}