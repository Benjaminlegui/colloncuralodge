import styles from './Card.module.scss';

const Card = ({ img, title, copy }) => {
    return (
        <article className={styles.card}>
            <img src={img.src} alt="fishing photo" />
            <div className={styles.meta}>
                <h3>{title}</h3>
                <p>{copy}</p>
            </div>
        </article>
    );
}

export default Card;