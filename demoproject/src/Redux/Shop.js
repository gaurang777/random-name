import React, { Component } from 'react'
import {connect} from 'react-redux'
import {buy_BOOK,buy_PEN} from './Action'

 class Shop extends Component {
    render() {
        return (
            <div>
                <h1>React Redux!!!</h1>
                <h1>Number Of Book:{this.props.numberOfBook}</h1>
                <button onClick={this.props.buyBOOK}>Buy Books</button>
                <h1>Number Of Pen:{this.props.numberOfPen}</h1>
                <button onClick={this.props.buyPEN}>Buy Pen</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        numberOfBook:state.numberOfBook,
        numberOfPen:state.numberOfPen
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      buyBOOK: () => dispatch(buy_BOOK()),
      buyPEN: () => dispatch(buy_PEN()),
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Shop)