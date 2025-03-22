import './App.css'
import Content from './Components/Content/Content.jsx';
import Header from './Components/Header/Header.jsx'; 
import Nav from './Components/Nav/Nav.jsx';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
    api_key: '4fa0eaa5d979e26499dbced739ee43f1',
};

const App = () => {
  return <div>
    <Nav/>
    <Header/>
    <Content/>
  </div>
};

export default App;


































// const Comp = (props) => {
//   console.log(props);
//   // const styling = {
//   //   backgroundColor: 'black',
//   //   color: 'white',
//   //   margin: '10px',
//   //   padding: '10px',
//   //   height: '200px',
//   //   width: '200px'
//   // };

//   return (<div className='comp'>
//     <h3>Hello {props.name} with age {props.age} </h3>
//   </div>);
// };
// const App = () => {
//   var name = 'Vivek'
//   const styling = {
//     backgroundColor: 'black',
//     color: 'white',
//     margin: '10px',
//     padding: '10px',
    
//     width: '200px'
//   };

//   return (<div>
//     <nav/>
//     <h1 className='title'>😍Hello it's {name} here😍</h1> 
//     <p id='sub-title' style={{
//       color: 'red',
//       fontSize: '2rem'
//     }}>I am here to learn the react js</p>

//     <Comp  style={styling} name='kumar' age='22' />
//     <Comp  name='vivek' age='22' />

//   </div>);
// };

// export default App ;



// windows + .   --> for emojis
// a function which is going to return some jsx (like html elements)
// props: it is used to define the *properties or parameter in a component(function)
// props can be replaced with another name also like hello, props are just popular naming
// convention to pass same as parameter name in functions