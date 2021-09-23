import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component{
  constructor() {
    super();
    this.state = {
      count: 0
     
    };
    this.Increment = this.Increment.bind(this);
    this.Decrement = this.Decrement.bind(this);
     this.Pallavi = this.Pallavi.bind(this);
  }

  Increment() {
    this.setState(
      prevState => 
      {
      return {
        count: prevState.count + 1 
      }
    })
    
    
  }

 
  Decrement() {
   this.setState({
     count: this.state.count - 1,

    })
  }

  Pallavi(){
   this.setState({
     count: this.state.count * 2,

    })
  }

   
    componentDidMount() {
        console.log("Mounted")
    }
    
    componentDidUpdate() {
        console.log("Did Update")
    }
    



render() {
  const { count } = this.state;  // destructuring the object this is called 
    console.log("this is incidemt");
      return (
    
        <div >
          <h1> Count : </h1>
          <h1>{count}</h1>
          <button onClick={this.Increment}>Increment </button>
          <button onClick={this.Decrement}>decrement </button>
          <button onClick={this.Pallavi}> double  </button>
          
        </div>
    
      );
}

}

  
  
ReactDOM.render(
 
    <App/>,
  
  document.getElementById('root')
);
