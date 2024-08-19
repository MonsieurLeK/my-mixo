import styles from './Header.module.css'
import logo from '../../assets/logo.webp'

export default function Header() {
    return <header className={styles.headerContainer}>
        <img src={logo} alt='logo de la marque' className={styles.logo} />
        
    </header>
}