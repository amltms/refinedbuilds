import './App.css';
import {BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom';

import { Nav } from './components/utility/Nav';
import {Home} from './components/home';

import {Components} from './components/components/componentsHome';
import { ComponentList } from './components/components/componentList';
import {ComponentOverview} from './components/components/componentOverview';

import {Software} from './components/buildpc/software/software';
import { Budget} from './components/buildpc/budget/budget';
import { Suggestions } from './components/buildpc/suggestions/suggestions';
import {BuildOverview} from './components/buildpc/suggestions/buildOverview';

function App() {
    return (

            <BrowserRouter>
                <Nav/> 
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/suggestions" component={Suggestions}/>
                    <div className="container">
                        <Route exact path="/budget" component={Budget}/>
                        <Route exact path="/buildpc" component={Software}/>
                        <Route exact path="/overview" component={BuildOverview}/>
                        <Route exact path="/components" component={Components}/>
                        <Route exact path="/components/:type" component={ComponentList}/>
                        <Route exact path="/components/:type/:id" component={ComponentOverview}/>
                    </div>
                </Switch>
            </BrowserRouter>
  );
}

export default App;
