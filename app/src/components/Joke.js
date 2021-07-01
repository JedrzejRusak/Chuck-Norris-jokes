import React from 'react'
import '../style/Joke.css'

const Joke = props => (
	<h1 className='app__joke'>{props.joke}</h1>
)

export default Joke;