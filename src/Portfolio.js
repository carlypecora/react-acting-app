import React from 'react'
import Image from 'react-bootstrap/Image'
import Car1 from './images/CARLY-1.jpg'
import Car2 from './images/CARLY-2.jpg'
import Car3 from './images/CARLY-3.jpg'
import Car4 from './images/CARLY-4.jpg'
import Car5 from './images/CARLY-5.jpg'
import Car6 from './images/CARLY-6.jpg'
import Car7 from './images/CARLY-7.jpg'
import Car8 from './images/CARLY-8.jpg'
import Car9 from './images/CARLY-9.jpg'
import Bridge from './image/1W1B7354-Edit-2.jpg'
import Bridge2 from './image/1W1B7516-Edit.jpg'
import Bridge3 from './image/1W1B7525-Edit.jpg'
import Bridge3 from './image/1W1B7548-Edit.jpg'
import Bridge4 from './image/1W1B7554-Edit-2.jpg'



export default const Portfolio = () => {

const createRow = (img1, img2, img3) => {
	return imgs.map(img => {
		return(
		<Row>
			<Col xs={6} md={4}>
		      <Image src={img1} rounded />
		    </Col>
		    <Col xs={6} md={4}>
		      <Image src={img2} rounded />
		    </Col>
		    <Col xs={6} md={4}>
		      <Image src={img3} rounded />
		    </Col>
		</Row>
		)
	})
}

return (
	<Container>
	  {this.createRow(Car1, Car2, Car3)}
	  {this.createRow(Car4, Car5, Car6)}
	  {this.createRow(Car7, Car8, Car9)}
	  {this.createRow(Bridge, Bridge1, Bridge2)}
	  {this.createRow(Bridge3, Bridge4)}
	</Container>
	)
}