import '../style/amanda.css'
import bilde from '../assets/amanda.jpeg'


export default function Amanda() {
return(
<article className="card-amanda">
    <img src={bilde} alt="Bilde av Amanda"/>
    <h2>Amanda Røhne</h2>
    <p>
        <a href="mailto:amandak@hiof.no">
            amandak@hiof.no
        </a>
    </p>
    <p>Bachelor i Digitale Medier og Design</p>
</article>
)
}

