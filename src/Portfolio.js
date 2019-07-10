import React from 'react'
import { Image, Row, Col, Container } from 'react-bootstrap/Image'
import Car1 from './images/CARLY-1.jpeg'
import Car2 from './images/CARLY-2.jpeg'
import Car3 from './images/CARLY-3.jpeg'
import Car4 from './images/CARLY-4.jpeg'
import Car5 from './images/CARLY-5.jpg'
import Car6 from './images/CARLY-6.jpeg'
import Car7 from './images/CARLY-7.jpg'
import Car8 from './images/CARLY-8.jpeg'
import Car9 from './images/CARLY-9.jpeg'
import Bridge from './images/1W1B7354-Edit-2.jpg'
import Bridge2 from './images/1W1B7516-Edit.jpg'
import Bridge3 from './images/1W1B7525-Edit.jpg'
import Bridge5 from './images/1W1B7548-Edit.jpg'
import Bridge4 from './images/1W1B7554-Edit-2.jpg'


export default class Portfolio extends React.Component{

// createRow = (img1, img2, img3) => {
// 	const imgs = [img1, img2, img3]
// 	return imgs.map(img => {
// 		return(
// 		<Row>
// 			<Col xs={6} md={4}>
// 		      <Image src={img1} rounded />
// 		    </Col>
// 		    <Col xs={6} md={4}>
// 		      <Image src={img2} rounded />
// 		    </Col>
// 		    <Col xs={6} md={4}>
// 		      <Image src={img3} rounded />
// 		    </Col>
// 		</Row>
// 		)
// 	})
// }

render(){
return (
	
	 
<div class="griddin">
	
	<img class="portfolio" src={Bridge3} />
	<img class="portfolio" src={Bridge2} />
	<img class="portfolio" src={Bridge} />
	<img class="portfolio" src={Bridge5} />
	<img class="portfolio car" src={Car4} />
	<img class="portfolio car" src={Car9} />
	<img class="portfolio car" src={Car2} />
	<img class="portfolio car" src={Car3} />
	<img class="portfolio car" src={Car1} />
	<img class="portfolio car" src={Car6} />
	<img class="portfolio car" src={Car7} />
	<img class="portfolio car" src={Car8} />
	
</div>
	

	)
	}
}



// module.exports = {
// 	pic: Bridge4,
// }
 	 //  {this.createRow(Car1, Car2, Car3)}
	  // {this.createRow(Car4, Car5, Car6)}
	  // {this.createRow(Car7, Car8, Car9)}
	  // {this.createRow(Bridge, Bridge3, Bridge2)}
	  // {this.createRow(Bridge5, Bridge4)}
//<Col xs={6} md={4}>
		    //   <Image src={Car2} rounded />
		    // </Col>
		    // <Col xs={6} md={4}>
		    //   <Image src={Car3} rounded />
		    // </Col>
