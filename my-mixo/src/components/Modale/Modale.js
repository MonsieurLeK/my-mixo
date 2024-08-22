import styles from './Modale.module.css'
import { useState } from 'react'
import menuPic from '../../assets/menuseul.webp'

export default function Modale() {

    const [isVisible, setVisible] = useState(false)

    function makeVisible() {
        setVisible(true)
    }
    function makeDisappear() {
        setVisible(false)
    }

    return <> <div className={styles.modaleButton} 
    onClick={isVisible ? makeDisappear : makeVisible} >
        <span className={isVisible ? styles.menuTextLeft : styles.menuText} >Menu 
            <span className={styles.menuCross} >✖</span> 
            </span>
    </div>
    <div className={isVisible ? styles.menuContainer : styles.menuHidden} >
        <img src={menuPic} alt='menu des cocktails' className={styles.menuPicture} ></img>
    </div>
    </>
}