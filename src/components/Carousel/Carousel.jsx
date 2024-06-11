// import Swiper core and required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import styles from './Carousel.module.scss';

const Carousel = ({ cards }) => {
    return <div className={styles.carousel}>
    <Swiper 
        className={styles.swiper}
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

    >
        {cards.map( (card, index) => {
            return <SwiperSlide key={index}><img className={styles.img} src={card.src} alt="fishing image" /></SwiperSlide>
        } )}
    </Swiper>
    </div>
}

export default Carousel;