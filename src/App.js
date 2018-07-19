import React from 'react';
///import logo from './logo.svg';
//import './App.css';
import Header from './components/Header/header';
import { Switch, Route } from 'react-router-dom';

// class App extends Component {
//   render() {
//     return (
//       <div>       
//         <Header />      
//       </div>
//     );
//   }
// }

const App = () => {
  return (<Switch>
      <Route exact path='/' component={Header}/>
      <Route exact path='/home' component={Header}/>
      <Route path='/add-user' component={Header}/>
      <Route path='/list-of-user' component={Header}/>
    </Switch>)
}

export default App;
