import React from 'react'

export default class Product extends React.Component
{
    constructor(props) {
        super(props)
    
        this.state = {
             product_price:12000,
             show:true
        }
        console.log("Calling Constructor()!!!")
    }
    static getDerivedStateFromProps(props,state){
        console.log("Calling getDerivedStateFromProps()!!!")
        return state.product_price 
    }
    componentDidMount(){
        console.log("calling componentDidMount()!!")
        setTimeout(()=>{
            this.setState({
                product_price:this.state.product_price + 200
            })
        },2000)
    }
    shouldComponentUpdate(){
        console.log("calling shouldComponentUpdate!!")
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("calling getSnapshotBeforeUpdate!!")
        document.getElementById('div1').innerHTML = "<h1>Before Update:"+prevState.product_price+"</h1>"
        return prevState.product_price
    }
    componentDidUpdate(){
        console.log("calling componentDidUpdate!!")
        document.getElementById('div2').innerHTML = "<h1>After Update:"+this.state.product_price+"</h1>"
    }
    updatePrice = ()=>{
        this.setState({
            product_price:this.state.product_price + 200
        })
    }
    delChild = ()=>{
        this.setState({
            show:false
        })
    }
    render(){
        console.log("Calling Render()!!!")
        return(
            <div>
                 <h1>LifeCycleOfComponent!!</h1>
                 {this.state.show ? <Child /> : <h1>Child Component has been removed!!</h1>}
                 <h1>ProductPrice in Rs:{this.state.product_price}</h1>
                 <div id="div1"></div>
                 <div id="div2"></div>
                 <button onClick={this.updatePrice}>UpdatePrice</button>
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