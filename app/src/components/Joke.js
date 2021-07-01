import React from 'react';
import '../style/Joke.css';
import chuckS from "../img/Chuck-Norris.jpg";
import chuckM from "../img/Chuck-Norris-photo@2x.jpg";
import chuckL from "../img/Chuck-Norris-photo@3x.jpg";
import randomS from '../img/Random-photo.png';
import randomM from '../img/Random-photo@2x.png';
import randomL from '../img/Random-photo@3x.png';

const Joke = props => (
	<div>
	  <img className='app__img' srcSet={`${props.impersonate[0] ? randomS : chuckS} 337w, ${props.impersonate[0] ? randomM : chuckM} 674w`}
	  sizes="
	  (max-width:599px) 304px,
	  439px
	  "
	    src={props.impersonate[0] ? randomL : chuckL} alt="Chuck Norris"/>
	  <h1 className='app__joke'>{props.joke}</h1>
	</div>
)

export default Joke;