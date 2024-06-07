import styles from './Link.module.scss';

const Link = ({ href, target, text, type = 'primary', color = "white" }) => {
    return <a className={`${styles.link} ${styles[type]} ${styles[color]}`} href={href} target={target}>{text}</a>
}

export default Link;