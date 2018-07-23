import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Recipes from './store/Recipes'
import {Link} from 'react-router-dom'
import RecipeIndex from './pages/Recipe_Index'
import RecipeDetail from './pages/Recipe_Detail'

class App extends Component {
  componentWillMount(){
  this.setState({recipes: Recipes})
  }


    render() {
        return (
            <div>

                <Router>
                    <div>
                      <Route exact path='/detail/:id' component={RecipeDetail} />
                      <Route path='/recipes'
                      render={(props)=><RecipeIndex {...props} recipes={this.state.recipes}/>}/>
                      <Route exact path='/' component={Home}/>

                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
