import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Recipe_Index extends Component {


	render() {
    var receipelist=this.props.recipes.map(function(recipe){
      return(
        <Link to={"/detail/" + recipe.id}>
        <li>{recipe.name}{recipe.id}</li>
        </Link>);
    }
  )

    console.log(this.props.recipes[0].name);
		return (

        <ul>{receipelist}</ul>
		)
	}
}

export default Recipe_Index
