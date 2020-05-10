import React, {Component} from 'react';
import axios from 'axios';
//import {Chart} from 'primereact/chart';
import {Bar} from 'react-chartjs-2';
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

  /*displayBlogPost = (posts) => {
    if (!posts.length) return null;

    return posts.map((post, index) => (
      <div key={index}>
        <h3>{post.name}</h3>
        <p>
          {post.chemistry}
        </p>
      </div>
    ));
  };*/

  render() {

  console.log('State: ',this.state);
   return(
     <div className="app" align="center">
       <h2><center><i>Marks Bar Graph</i></center></h2>
       <form onSubmit={this.submit}>
         <div className="form-input">
         <label><i>Name:</i></label>
           <input
           type="text"
           name="name"
           deafultValue={this.state.name}
           onChange={this.handleChange}
           />
          </div>
          <div className="form-input"> 
           <label><i>Physics:</i></label>
           <input
           type="text"
           name="physics"
           defaultValue={this.state.physics}
           onChange={this.handleChange}
           />
         </div>
         <div className="form-input">
           <label><i>Chemistry:</i></label>
           <input
           type="text"
           name="chemistry"
           defaultValue={this.state.chemistry}
           onChange={this.handleChange}
           />
         </div>
         <div className="form-input">
           <label><i>Mathematics:</i></label>
         <input
           type="text"
           name="maths"
           defaultValue={this.state.maths}
           onChange={this.handleChange}
           />
         </div>
         <div className="form-input">
           <label><i>Biology:</i></label>
           <input
           type="text"
           name="biology"
           defaultValue={this.state.biology}
           onChange={this.handleChange}
           />
         </div>
         <div className="form-input">
           <label><i>English:</i></label>
           <input
           type="text"
           name="english"
           defaultValue={this.state.english}
           onChange={this.handleChange}
           />
         </div>
         <button>Submit</button>
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