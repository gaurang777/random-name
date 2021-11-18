import React from 'react'

export default class Cars extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            model:"GT 40",
            brand:"ford",
            color:"black",
            year:1947
        }
    console.log("Calling Consturctor()!!!")
    }
    getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    changeCarColor = () => {
        const newColor = this.getRandomColor()
        this.setState({
            color: newColor
        })
    }

    static getDerivedStateFromProps(props,state){
        console.log("Calling getDerivedStateFromProps()!!!")
        return state.color

    }
    componentDidMount(){
        console.log("calling componentDidMount()!!")
        setTimeout(()=>{
            this.setState({
                color:this.state.color
            })
        },2000)
    }
    shouldComponentUpdate(){
        console.log("calling shouldComponentUpdate!!")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("calling getSnapshotBeforeUpdate!!")
        document.getElementById('div1').innerHTML = "<h1>Before Update:"+prevState.color+"</h1>"
        return prevState.color
    }
    componentDidUpdate(){
        console.log("calling componentDidUpdate!!")
        document.getElementById('div2').innerHTML = "<h1>After Update:"+this.state.color+"</h1>"
    }


    // getRandomColor = () => {
    //     var letters = '0123456789ABCDEF';
    //     var color = '#';
    //     for (var i = 0; i < 6; i++) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }
    // changeCarColor = () => {
    //     const newColor = this.getRandomColor()
    //     this.setState({
    //         color: newColor
    //     })
    // }

    
    render(){
        console.log("Calling Render()!!!")
        return(
            <div>
                 <h1>Car Details</h1>
                 <h1>Brand:{this.state.brand}</h1>
                 <h1>Model:{this.state.model}</h1>
                 <h1>Color:{this.state.color}</h1>
                 <h1>Year:{this.state.year}</h1>

                 {/* {this.state.show ? <Child /> : <h1>Child Component has been removed!!</h1>}  */}
                  <div style={{backgroundColor:this.state.color}} id="div1">  </div>
                 
                 <div style={{backgroundColor:this.state.color}}  id="div2" ></div>
                 <button onClick={this.changeCarColor}>Change color</button>
                  <button onClick={this.delChild}>Delete</button> 
            </div>
        )
    }
}

class Child extends React.Component{
    componentWillUnmount(){
        console.log("calling componentWillUnmount!!")
    }
    render(){
        return(
            <h1>Child Component!!!</h1>
        )
    }
}




















    