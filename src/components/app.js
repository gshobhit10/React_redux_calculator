import React, { Component } from 'react';
import {connect} from 'react-redux';
import {handleNumberClick, handleClearNumbers, handleSetOperator} from '../actions/index'

class App extends Component {
  numberClick(event){
    this.props.handleNumberClick(event.target.innerHTML);
  }

  setOperator(event){
    this.props.handleSetOperator(event.target.innerHTML);
  }

  clearNumbers(event){
    this.props.handleClearNumbers();
  }

  render() {
    const {currentNumber, equation} = this.props.math;
    return (
      <div className="Calculator">
          <div className="CalculatorHead">
              <div className="Equation">{equation}</div>
              <div className="CurrentNumber">{currentNumber}</div>
          </div>
          <div>
              <div className="Button" onClick={this.numberClick.bind(this)}>7</div>
              <div className="Button" onClick={this.numberClick.bind(this)}>8</div>
              <div className="Button" onClick={this.numberClick.bind(this)}>9</div>
              <div className="Button" onClick={this.setOperator.bind(this)}>/</div>
              <div className="Button rowspan2" onClick={this.clearNumbers.bind(this)}>C</div>
          </div>
          <div>
              <div className="Button" onClick={this.numberClick.bind(this)}>4</div>
              <div className="Button" onClick={this.numberClick.bind(this)}>5</div>
              <div className="Button" onClick={this.numberClick.bind(this)}>6</div>
              <div className="Button" onClick={this.setOperator.bind(this)}>*</div>
          </div>
          <div>
              <div className="Button" onClick={this.numberClick.bind(this)}>1</div>
              <div className="Button" onClick={this.numberClick.bind(this)}>2</div>
              <div className="Button" onClick={this.numberClick.bind(this)}>3</div>
              <div className="Button" onClick={this.setOperator.bind(this)}>-</div>
              <div className="Button rowspan2" onClick={this.setOperator.bind(this)}>=</div>
          </div>
          <div>
              <div className="Button colspan2" onClick={this.numberClick.bind(this)}>0</div>
              <div className="Button" onClick={this.numberClick.bind(this)}>.</div>
              <div className="Button" onClick={this.setOperator.bind(this)}>+</div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    math: state.math
  }
}

export default connect(mapStateToProps, {handleNumberClick, handleClearNumbers, handleSetOperator})(App);
