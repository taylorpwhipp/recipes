import React, { Component } from 'react'
import Header from '../components/Header'

class Home extends Component {
	render() {
    console.log(this.props);
		return (

        <div>
        	<h1>Welcome! You found the Home Page</h1>
          <Header/>
        </div>


		)
	}
}

export default Home
