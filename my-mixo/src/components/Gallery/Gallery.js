import styles from './Gallery.module.css'
import cocktailOrange from '../../assets/cocktail_orange.jpg'
import desPaillettes from '../../assets/des_paillettes.jpg'
import experienceChimique from '../../assets/experience_chimique.jpg'
import laurierColada from '../../assets/laurier_colada.jpg'
import lynchburgLemonade from '../../assets/lynchburg_lemonade.jpg'
import mentheCitron from '../../assets/menthe_citron.jpg'
import petitParasol from '../../assets/petit_parasol.jpg'
import verreDoseur from '../../assets/verre_doseur.jpg'

export default function Gallery() {
    return <div className={styles.galleryContainer}>
        <img src={cocktailOrange} loading="lazy" alt="Cocktail avec une tranche d'orange brûlée" className={styles.galleryPic} />
        <img src={desPaillettes} loading="lazy" alt="Cocktail avec des paillettes" className={styles.galleryPic} />
        <img src={experienceChimique} loading="lazy" alt="ça ressemble à une expérience chimique" className={styles.galleryPic} />
        <img src={laurierColada} loading="lazy" alt="Une pina colada avec une feuille de laurier" className={styles.galleryPic} />
        <img src={lynchburgLemonade} loading="lazy" alt="Cocktail dans un verre de lynchburg lemonade" className={styles.galleryPic} />
        <img src={mentheCitron} loading="lazy" alt="Cocktail décoré avec menthe et citron" className={styles.galleryPic} />
        <img src={petitParasol} loading="lazy" alt="Cocktail décoré avec un petit parasol" className={styles.galleryPic} />
        <img src={verreDoseur} loading="lazy" alt="Cocktail à coté d'un verre doseur" className={styles.galleryPic} />
    </div>
}