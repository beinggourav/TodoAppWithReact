import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Navbar from './components/navbar';
import TaskDetails from './components/TaskDetails';
import Quadrant from './components/Quadrant';
import Create from './components/Create';
import Heading from './components/Heading';

// to start app
// npm start  (make sure you are in todo-app folder(in terminal))
// npx json-server --watch data/database.json --port 8000 (to wath over the json server for data)

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
