import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption
} from 'mdb-react-ui-kit';
import Slide1 from '../../assets/petversoslide1.gif';
import Alimentar from '../../assets/alimentar.png';
import Beleza from '../../assets/beleza.png';

export default function Carousel() {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselInner>
        <MDBCarouselItem className='active'>
          <MDBCarouselElement src={ Slide1 } alt='...' />
          <MDBCarouselCaption>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem>
          <MDBCarouselElement src={ Alimentar } alt='...' />
          <MDBCarouselCaption>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem>
          <MDBCarouselElement src={ Beleza } alt='...' />
          <MDBCarouselCaption>
            
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}