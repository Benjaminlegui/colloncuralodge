import styles from './Nav.module.scss';
import Link from '../Link/Link';
import { useState } from 'react';

const Nav = () => {
    const [ toggle, setToggle] = useState(false);

    return <>
        <button className={styles.hamburger} onClick={() => setToggle((prev) => !prev)}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
        </button>
        <nav className={`${styles.nav} ${toggle ? styles.open : styles.close}`}>
            <a href="/" className={styles.link}>CollonCuraLodge</a>
            <ul className={styles.list} role='list'>
                <li><Link href="/#" className={styles.link} text={`lodge`}>Lodge</Link></li>
                <li><Link href="/#" className={styles.link} text={`Fishing`}></Link></li>
                <li><Link href="/#" className={styles.link} text={`Program`}></Link></li>
                <li><Link href="/about" className={styles.link} text={`About Us`}></Link></li>
                <li><Link href="/#" className={styles.link} text={`Journal`}></Link></li>
            </ul>
            <Link href={`/contact-us`} text={`contact us`} type='secondary' />
        </nav>
    </>
}

export default Nav;