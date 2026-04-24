import '../style/ingrid.css'
import bilde from '../assets/ingrid.png'

export default function Ingrid (){
    return (
        <article className="ingrid-card">
             <img src={bilde} alt="Illustrasjon av Ingrid" />
        <h2>Ingrid</h2>
        <a href="mailto:ingridck@hiof.no">ingridck@hiof.no</a>
        <p>Bachelor i Digitale medier og design</p>
      </article>
       
    )
}

