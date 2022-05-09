import React from "react";

class MyComponent extends React.Component{
    constructor(){
        super();
        this.state={
            id:1,
            name:"John"
        }
    }
   
     updateName=()=>{
        this.setState({
             name:"David"
         });
         console.log(this.state.name);
     }
    render(){

        return(
            <div className='App'>
                <h1>This is a class component! Hi {this.props.name}</h1>
                <p>Added a new component!!</p>
                <p>Update name from state is: {this.state.name}</p>
                <p>
                <button onClick={this.updateName}>Update</button>
                </p>
            </div>
        )
    }
}

export {MyComponent};