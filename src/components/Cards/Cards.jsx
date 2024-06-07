import Card from "../Card/Card";
import { motion} from "framer-motion";
import { fadeInStagger } from "../animation-props/animation";

import styles from './Cards.module.scss';

const Cards = ({ cards }) => {
    return <div className={styles.cards}>
        {cards.map((card, index) => {
            return <motion.div variants={fadeInStagger} initial="initial" animate='animate' custom={index} key={index}><Card {...card} /></motion.div>
        })}
    </div>
}

export default Cards;