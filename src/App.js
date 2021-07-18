import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import TaskDetails from './components/TaskDetails';
import UrgentImportant from './components/UrgentImportant';

// to start app
// npm start  (make sure you are in todo-app folder(in terminal))


// for deploy to github pages:
// npm install gh-pages --save-dev    
//git init  and then add commit and push

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path = "/TodoAppWithReact">
              <Home />
            </Route>
            <Route exact path="/TodoAppWithReact/urgentImportant">
              <UrgentImportant />
            </Route>
            <Route path ="/TodoAppWithReact/urgentImportant/:id">
              <TaskDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
