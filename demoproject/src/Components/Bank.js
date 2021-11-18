import React, { Component } from 'react'

export default class Bank extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             balance:10000
             
        }
        this.handleupdateBalance=this.handleupdateBalance.bind(this);
    }
    //arrow
    withdrawAmt = ()=>{
        this.setState({
            balance: this.state.balance - 100
        })
    }

    depositAmt = ()=> {
        this.setState((pstate)=>(
            {
                balance:pstate.balance + 100
            }

        ))
            
        
    }
    handleupdateBalance(){
        this.updateBalance()
    }
    render() {
        return (
            <div>
               <h1>Bank Details</h1>
               <h1>Balance:{this.state.balance}</h1>
               <button onClick={this.updateBalance}
               style={{fontSize:30,fontWeight:'bold'}} 
               >Withdraw</button>
               <button onClick={this.depositAmt}
               style={{fontSize:30,fontWeight:'bold'}} 
               >Deposit</button>
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
       