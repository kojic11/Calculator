import React from 'react';
import Calculator from './components/calc';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      value:[],
      result:'',
    };
  };
  getValue = (event) =>{
    this.setState({ value: [...this.state.value, event.target.value] })    
    return this.state.value;
  }
  
  getResult = () =>{
    try{
      this.setState({result:eval(this.state.value.join(''))});
    }
    catch(error){
      console.log(alert("Math error. Check values"));
    }
  }


clearValues = () =>{
  this.setState({value:[]});
  this.setState({result:''});
}

render(){
  return (
    <div>
        <Calculator result={this.state.result} getValue = {this.getValue} getOperator={this.getOperator} numValue={this.state.value.join('')} getResult={this.getResult} clear={this.clearValues}/>
    </div>
  );
}
}

export default App;
