import './App.css';
import {BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';


import { Nav } from './components/utility/Nav';
import {Home} from './components/home';
import {Components} from './components/components/componentsHome';
import { Suggestions } from './components/buildpc/suggestions/suggestions';
import {Software} from './components/buildpc/software';
import { ComponentList } from './components/components/componentList';
import { GlobalProvider} from './context/GlobalState';
import { Budget} from './components/buildpc/budget';
import {ComponentOverview} from './components/components/componentOverview';
function App() {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Nav/> 
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/suggestions" component={Suggestions}/>
                    <div className="container">
                        <Route exact path="/buildpc" component={Software}/>
                        <Route exact path="/budget" component={Budget}/>
                        <Route exact path="/components" component={Components}/>
                        <Route exact path="/components/:type" component={ComponentList}/>
                        <Route exact path="/components/:type/:id" component={ComponentOverview}/>
                    </div>
                </Switch>
            </BrowserRouter>
        </GlobalProvider>
  );
}

export default App;
