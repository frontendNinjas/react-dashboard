import React from 'react';
import Slider   from 'react-slick';

class SimpleSlider  extends React.Component{	
  render(){
 var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div><img src="../src/images/1.jpg" /> </div>
        <div><img src="../src/images/2.jpg" /></div>
        <div><img src="../src/images/3.jpg" /></div>
      </Slider>
    );
  }
}

export default SimpleSlider 