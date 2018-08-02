import React, {Component} from 'react'
import './Edit.css'

class Edit extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: 0,
      interest: 0,
      new: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeV = this.handleChangeV.bind(this);
    this.handleChangeI = this.handleChangeI.bind(this);
  }

  handleSubmit(e){
    e.preventDefault()
    let obj = {
      value: this.state.value,
      interest: this.state.interest
    }
    this.props.addCd(obj)
    this.setState({value: 0, interest: 0, new: false})
  }

  handleChangeV(e){
    this.setState({value: e.target.value})
  }

  handleChangeI(e){
    this.setState({interest: e.target.value})
  }

  render(){
    const existing = this.props.cds.map((cd, index)=>{
      return (
        <div key={index} className='info'>
          <p>Value: {cd.value} </p>
          <p>Interest rate: {cd.interest} </p>
        </div>
      )
    })

    const newForm = <form onSubmit={this.handleSubmit} className='info'>
        <label> Value:
          <input className='input' value={this.state.value} min='1' type='number'
              onChange={this.handleChangeV}/>
        </label>
        <label> Interest Rate:
          <input className='input' value={this.state.interest} step='.1' min='0' max='100' type='number'
              onChange={this.handleChangeI} />
        </label>
        <button type='submit'> + </button>
      </form>

    return (
      <div>
        <p style={{'textAlign':'center', 'fontSize': '30px'}}> Add Deposits </p>
        <div id='box'>
         {existing}
         {this.state.new ? newForm : null}
         {this.state.new ? null :
            <button className='but info' onClick={()=>{this.setState({new: true})}} > + </button>}
        </div>
      </div>
    )
  }

}



export default Edit;
