import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Recipes from '../store/Recipes'

class RecipeDetail extends Component {

	render() {
    let id = this.props.match.params.id - 1
    let currentRecipe = Recipes[id]
    console.log(currentRecipe);
		return (
      <h1>{currentRecipe.name}{currentRecipe.id}</h1>
		)
	}
}

export default RecipeDetail
