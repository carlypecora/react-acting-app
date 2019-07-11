import React from 'react'
import CarResume from './images/Resume.pdf'

export default class Resume extends React.Component {
	render(){
	return (
		<embed src={CarResume} ></embed>
		)
	}
}

// <embed src={CarlyResume}></embed>