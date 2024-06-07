// import Swiper core and required modules
import { motion } from 'framer-motion';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './Carousel.module.scss';

const Carousel = ({ cards }) => {
    const sliderRef = useRef();

    return <motion.div initial={{ opacity: 0, y: 100}} whileInView={{ opacity: 1, y: 0}} transition={{duration: .5}} viewport={{ once: true}}>
    <Swiper 
        onSwiper={it => sliderRef.current = it}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
    >
        {cards.map( (card, index) => {
            return <SwiperSlide key={index}><img className={styles.img} src={card.src} alt="fishing image" /></SwiperSlide>
        } )}
    </Swiper>
    </motion.div>
}

export default Carousel;