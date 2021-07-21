
// to start app, run below command:
// npm start  (make sure you are in todo-app folder(in terminal))
// npx json-server --watch data/database.json --port 8001 (to wath over the json server for data)

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TaskDetails from './components/TaskDetails';
import Quadrant from './components/Quadrant';
import Create from './components/Create';
import Heading from './components/Heading';


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
            <Route  exact path="/TodoAppWithReact/:quadrant">
              <Heading />
              <Quadrant />
            </Route>
            <Route  exact path = "/TodoAppWithReact/:quadrant/create">
              <Heading />
              <Create />
            </Route>
            <Route  path ="/TodoAppWithReact/:quadrant/:id">
              <Heading />
              <TaskDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
