import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import styles from './carousel.module.css';
function Corousel() {
    const images = [
        '/assets/slider/1.jpg',
        '/assets/slider/2.jpg',
        '/assets/slider/3.jpg',
        '/assets/slider/4.jpg',
    ];

    return (
        <>
            <Carousel
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
                swipeable={true}
            >
                {images.map((i, ind) => {
                    return (
                        <div key={ind}>
                            {' '}
                            <Image
                                priority
                                style={{height: 'auto'}}
                                width={690}
                                height={460}
                                className={styles.img}
                                src={i}
                                alt={i}
                            />
                        </div>
                    );
                })}
            </Carousel>
        </>
    );
}

export default Corousel;
