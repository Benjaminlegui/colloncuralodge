import styles from './Link.module.scss';

const Link = ({ href, target, text, type = 'primary' }) => {
    return <a className={`${styles.link} ${styles[type]}`} href={href} target={target}>{text}</a>
}

export default Link;