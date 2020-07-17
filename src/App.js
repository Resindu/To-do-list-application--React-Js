import React from 'react';
import './App.css';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      newItem:"",
      list:[]
    };
  }
  addItem(todovalue){
    if(todovalue !== ""){
      const newItem={
        id:Date.now(),
        value:todovalue,
        isDone:false
      };
      const li = [...this.state.list];
      li.push(newItem);
      this.setState({
        list:li,
        newItem:""
      });
    }
  
  }

  deleteItem(id){

    const li = [...this.state.list];
    const updatedlist = li.filter(item => item.id !==id );
    this.setState({
      list:updatedlist
    });

  }
  updateInput(input){
    this.setState({
      newItem:input
    });

  }


  
render(){
  document.body.style.backgroundColor = "#2C5F2D";
  document.body.style.fontSize = "20px";



  return(


    <div className="container">
      <h1 className="thetopic">YOUR TO DO LIST</h1>
      <div className="row">
        <div className="col-lg-8">
          <div className="inputwrapper">
        <input 
        type="text"
        className="inputtodo"
        placeholder="write smthng"
        required
        value={this.state.newItem}
        onChange={e => this.updateInput(e.target.value)}
        />
        </div>
        </div>
      
      <div className="col-lg-3">
      <button className="addbtn" onClick={() => this.addItem(this.state.newItem)}>Add</button>
      </div>

      </div>
      <div className="list">
        
        <ul className="todolist">
          {this.state.list.map(item => {
            return(
              <div className="row">

              <li key={item.id}>
              <div className="col-lg-8">
                <div className="col-lg-1">

                <input
                 type="checkbox" 
                 onChange={()=>{}}
               />

                </div>

                <div className="col-lg-7">
                {item.value}

                </div>

              
               </div>

               <div className="col-lg-4">
               <button  className="deletebtn" onClick={() => this.deleteItem(item.id)}>Delete</button>

               </div>

              </li>
              </div>
            );
          })}
          


        </ul>
      

      </div>
      
    </div>
  

  );
}


}

  

export default App;
