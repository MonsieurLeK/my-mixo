import styles from './Contact.module.css'
import phoneIcon from '../../assets/phone_icon.png'
import instaIcon from '../../assets/insta_icon.png'

export default function Contact() {
    return <div className={styles.contactArea} >
        <a href='https://www.instagram.com/mymixococktails/?hl=fr' target='blank' >
        <img src={instaIcon} alt='logo instagram' />
        @mymixococktails
        </a>
        <a href='tel:0768735793' >
            <img src={phoneIcon} alt='icone de téléphone' />
              07.68.73.57.93
        </a>
        <span className={styles.contactTrigger} >Contact</span>
    </div>
}