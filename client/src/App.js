/*
Author: Nishant Kumar
Description: This is the main react file, the form through which the data goes to the server is present here. The class names 
             of the form is related to the bootstrap used. The bootstrap used is taken from "https://getbootstrap.com/docs/4.0/getting-started/introduction/",
             and is used in index.html under the public folder.
Note: A proxy has been defined in package.json to resolve cors policy.             
*/

import React, {Component} from 'react';
import axios from 'axios';
//import {Chart} from 'primereact/chart';
import BarChartComponent from './components/BarChartComponent';
import './App.css';

class App extends React.Component {

  state = {
    name: '',
    physics: '',
    chemistry: '',
    maths: '',
    biology: '',
    english: '',
    posts: []
  };

  componentDidMount = () => {
    this.getBlogPost();
  };

  getBlogPost = () => {
    axios.get('/api')
    .then((response) => {
      const data = response.data;
      this.setState({ posts: data });
      console.log('Data has been recieved');
    })
    .catch(() => {
      alert('Error retrieving data');
    });
  };

  handleChange = ({target}) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };
  
  submit = (event) => {
    event.preventDefault();

    const payload = {
      name: this.state.name,
      physics: this.state.physics,
      chemistry: this.state.chemistry,
      maths: this.state.maths,
      biology: this.state.biology,
      english: this.state.english
    };

    axios({
      url: '/api/save',
      method: 'POST',
      data: payload
    })
     .then(() => {
       console.log('Data has been sent to the server');
       this.resetUserInputs();
       this.getBlogPost();
     })
     .catch(() => {
       console.log('Internal server error');
     });;
  };

  resetUserInputs = () => {
    this.setState({
      name: '',
      physics: null,
      chemistry: null,
      maths: null,
      biology: null,
      english: null
    });
  };

  render() {

  console.log('State: ',this.state);
   return(
     <div className="col-md-6 mt-5 mx-auto">
       <h1 className="h3 mb-3 font-weight-normal">Please Enter the Details</h1>
       <form onSubmit={this.submit}>
         <div className="form-group">
         <label htmlFor="name">Name:</label>
           <input
           type="text"
           className="form-control"
           name="name"
           placeholder="Enter Name"
           deafultValue={this.state.name}
           onChange={this.handleChange}
           />
          </div>
          <div className="form-group"> 
           <label htmlFor="physics">Physics:</label>
           <input
           type="text"
           className="form-control"
           name="physics"
           placeholder="Enter Marks"
           defaultValue={this.state.physics}
           onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label htmlFor="chemistry">Chemistry:</label>
           <input
           type="text"
           className="form-control"
           name="chemistry"
           placeholder="Enter Marks"
           defaultValue={this.state.chemistry}
           onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label htmlFor="maths">Mathematics:</label>
         <input
           type="text"
           className="form-control"
           name="maths"
           placeholder="Enter Marks"
           defaultValue={this.state.maths}
           onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label htmlFor="biology">Biology:</label>
           <input
           type="text"
           className="form-control"
           name="biology"
           placeholder="Enter Marks"
           defaultValue={this.state.biology}
           onChange={this.handleChange}
           />
         </div>
         <div className="form-group">
           <label htmlFor="english">English:</label>
           <input
           type="text"
           className="form-control"
           name="english"
           placeholder="Enter Marks"
           defaultValue={this.state.english}
           onChange={this.handleChange}
           />
         </div>
         <button type="submit" className="btn btn-lg btn-primary btn-block">Submit</button>
       </form>
       <div className="blog-">
         {this.state.posts.map(post => {
           return (
             <div>
               <BarChartComponent/>
             </div>
           );
         })}
       </div>
     </div>
   );
  }
}

export default App;