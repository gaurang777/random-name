import React, { Component } from 'react'

export default class Bank extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             balance:10000,
             name:"Vijay Maliya"
             
        }
        this.deposit=this.deposit.bind(this)
    }
    //arrow
    // updatebalance = ()=>{
    //     this.setState({
    //         balance: this.state.balance - 100
    //     })
    // }

    withdraw = ()=>{
        this.setState({
            balance: this.state.balance - 100
            
        })
    }

    deposit(){
        this.setState({
            balance:this.state.balance + 100
        })

    }
    
    // handledeposiAmt(){
    //     this.depositAmt()
    
    render() {
        return (
            <div>
               <h1>Bank Details</h1>
               <h1>Name:{this.state.name}</h1>
               <h1>Balance:{this.state.balance}</h1>
               <button onClick={this.withdraw}
               style={{fontSize:30,fontWeight:'bold'}} 
               >Withdraw</button>
               <button onClick={this.deposit}
               
               style={{fontSize:30,fontWeight:'bold'}} 
               >Deposit</button>
               <hr></hr>
            </div>
        )
    }
}
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         salary: 10000,
    //         name: "Rahul"
    //     }
       