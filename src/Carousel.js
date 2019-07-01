import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Bridge from './images/background.jpg'
import Bloom from './images/IMG_2464.JPG'
import Bike from './images/jj1_1474.JPG'
import Boss from './images/jj1_2162.JPG'
import Mirror from './images/IMG_7913.jpg'
import Work from './images/jj1_2921.JPG'

export default class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  // createCarItems = () => {
  // 	const imgs = [Bridge, Work, Mirror, Bike, Mirror, Boss, Bloom]
  // 	return imgs.map(img => {
  // 		return (
  // 		<Carousel.Item>
  //         <img
  //           className="d-block w-100"
  //           src={img}
  //           alt="First slide"
  //         />
  //         <Carousel.Caption>
  //           <h3>First slide label</h3>
  //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //         </Carousel.Caption>
  //       </Carousel.Item>
  // 		)
  // 	})
  // }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Bridge}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

