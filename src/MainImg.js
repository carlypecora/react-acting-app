import React from 'react';
import Img from './images/CARLY-5.jpg'

export default class MainImg extends React.Component {
	render(){
	  return (
	    <div>
	        <img  className="mainImg" src={Img} alt="img"/>
	    </div>
	  );
	}
}

