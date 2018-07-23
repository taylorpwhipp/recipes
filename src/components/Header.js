import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
	render() {
		return (
			<header style={{display: 'flex'}}>

				<nav>
					<ul>
						<li>
							<Link to="/recipes">Recipe_Index</Link>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}

export default Header
