import React, { Component } from 'react';
import './App.css';
import Tab from './Tab';
import Edit from './Edit';
import View from './View';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tab: 'EDIT',   //either EDIT or VIEW
      CDs: [],
      interest: 0
    }
  }

  handleEdit(){
    this.setState({tab: 'EDIT'})
  }

  handleView(){
    this.setState({tab: 'VIEW'})
  }

  calcInterestPerTenthSecond(){
    if(this.state.CDs.length > 0){
      let annualGain = 0;
      this.state.CDs.forEach((cdObj)=>{
        annualGain += (cdObj.value * cdObj.interest) - cdObj.value
      })
      const perTenthSecond = (((((annualGain/365)/24)/60)/60)/10)
      this.setState((prevState, props)=> ({
        interest: prevState.interest + perTenthSecond
      }))
    }
  }

  componentDidMount(){
    setInterval(() => {
      this.calcInterestPerTenthSecond()
    }, 100)
  }

  addCd(obj){
    let CDs = this.state.CDs.slice()
    CDs.push(obj)
    console.log(obj)
    this.setState({CDs}, ()=>{console.log(this.state.CDs)})
  }

  render() {
    return (
      <div>
        <Tab edit={this.handleEdit.bind(this)} view={this.handleView.bind(this)}/>
          {this.state.tab==='EDIT' ?  <Edit cds={this.state.CDs} addCd={this.addCd.bind(this)}/>
            : <View interest={this.state.interest} />
          }
      </div>
    );
  }
}


export default App;
