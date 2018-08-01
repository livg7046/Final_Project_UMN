import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import Title from "./components/Title";
import TitleOnly from "./components/TitleOnly";
import Question from './pages/QuestionPage';
import Wrapper from "./components/Wrapper";
import Login from "./pages/LoginPage/Login";
import NewUser from "./pages/NewUserPage/NewUser";
import UserPage from "./pages/UserPage";
import GlobalPage from './pages/Global/Global';
// import axios from 'axios';

// class App extends Component {
  
//   render() {
//     // console.log(this.state.profilePic);
//     return (
//       <div className="App">
//       <Router>
//         <Wrapper>
//           <Switch>
//           <Route exact path="/" render={(props) => (
//             <div>
//             <TitleOnly />
//             <Login history={props.history} /> 
//             </div>
//           )} />

//           <Route exact path="/newuser" render={(props) => (
//             <div>
//             <TitleOnly />
//             <NewUser history={props.history} /> 
//             </div>
//           )} />
          
//           <Route exact path="/login" render={(props) => (
//             <div>
//             <TitleOnly />
//             <Login history={props.history} /> 
//             </div>
//           )} />

//           <Route exact path="/question" render={(props) => (
//             <div>
//             {/* <Title src={(this.state.profilePic)}/> */}
//             <Question history={props.history} /> 
//             </div>
//           )} />

//           <Route exact path="/userpage" render={(props) => (
//             <div>
//               {/* <Title src={(this.state.profilePic)}/> */}
//               <UserPage history={props.history}/>  
//               </div>
//             ) }/>

//           <Route exact path="/global" render={(props) => (
//             <div>
//               {/* <Title src={(this.state.profilePic)}/> */}
//               <GlobalPage history={props.history}/>  
//               </div>
//             ) }/>
//           </Switch>
//         </Wrapper>
//       </Router>

//       </div>
//     );
//   };
// };

const App = () => (
  <Router>
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/newuser" component={NewUser} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/question" component={Question} />
        <Route exact path="/global" component={GlobalPage} />
        <Route exact path="/userpage" component={UserPage} />
      </Switch>
    </Wrapper>
  </Router> 
);

export default App;
