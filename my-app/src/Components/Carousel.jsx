import Carousel from 'react-bootstrap/Carousel';
// import img1 from '../images/Carousel/1.jpeg'
import img2 from '../images/Carousel/2.jpeg'
import img3 from '../images/Carousel/3.jpeg'
import img4 from '../images/Carousel/4.jpeg'
import img5 from '../images/Carousel/5.jpeg'
import img6 from '../images/Carousel/6.jpeg'
import img7 from '../images/Carousel/7.jpeg'
import img8 from '../images/Carousel/8.jpeg'
import img9 from '../images/Carousel/9.jpeg'
import img10 from '../images/Carousel/10.jpeg'
import img11 from '../images/Carousel/11.jpeg'
import img12 from '../images/Carousel/12.jpeg'
import img13 from '../images/Carousel/13.jpeg'
import img14 from '../images/Carousel/14.jpeg'
import img15 from '../images/Carousel/15.jpeg'

function CarouselComponent() {
    return (
        <div className='container_carousel'>
            <Carousel data-bs-theme="dark">
                {/* <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item> */}
                <Carousel.Item>
                    <img
                    className="d-block w-100 "
                    src={img2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img4}
                    alt="Fouth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img5}
                    alt="Fouth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img6}
                    alt="Fouth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img7}
                    alt="Fouth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img8}
                    alt="Fouth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img9}
                    alt="Fouth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img10}
                    alt="Fouth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img11}
                    alt="Fouth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img12}
                    alt="Fouth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img13}
                    alt="Fouth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img14}
                    alt="Fouth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img15}
                    alt="Fouth slide"
                    />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CarouselComponent;