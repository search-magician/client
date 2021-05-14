import Search1 from './Components/Search1'
import Search2 from './Components/Search2'
import Navbar from './Components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
function App() {
  return (
    < BrowserRouter >
      <div className="App">
        <Navbar/>
      </div>
      <Switch>
          <Route exact path='/' component={Search1} />
          <Route exact path='/search1' component={Search1} />
          <Route exact path='/search2' component={Search2} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
