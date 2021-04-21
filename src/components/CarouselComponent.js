import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from 'react-bootstrap/Carousel'


export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper" >
            <Carousel >
                <div className="Carou3" style={{height:300}}>
                </div>
                <div className="Carou1" style={{height:300}}>
                </div>
                <div className="Carou2" style={{height:300}}>
                </div>

            </Carousel>
        </div>

    );
}
