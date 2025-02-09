import './App.css'
import Header from './components/Header/Header'
import Gallery from './components/Gallery/Gallery'
import Modale from './components/Modale/Modale'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <div className="App">
      <Header/>
      <Contact />
      <Modale />
      <p className='myMixoConcept' >Chez My Mixo, nous transformons l'art du cocktail en une expérience 
        simple et accessible. <br/>Professionnel ou bien particulier amateur de bons moments? <br/>
         Nos pre-mix de cocktails en bib de 3 litres sont conçus pour réaliser jusqu'à 25 
        cocktails alcoolisés (12 cl par verre) ou 18 cocktails sans alcool 
        (16 cl par verre). <br/>Envie d'une création unique ?
        <br/>Bénéficiez également de cocktails personnalisés sur demande.<br/><br/>
        <span className='slogan' >Avec My Mixo, savourez la perfection à chaque verre sans effort.</span></p>
      <Gallery />
    </div>
  );
}

export default App;
