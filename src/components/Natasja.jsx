import '../style/natasja.css'
import bilde from '../assets/natasja.jpg'

export default function Natasja (){
    return (
    <article className="card-Natasja">
       <img src={bilde} alt="Bilde av Natasja"/>

        <h2>Natasja</h2>

        <p>
            <a href="mailto:mnkaplon@hiof.no">
                mnkaplon@hiof.no
            </a>
        </p>
        <p>Bachelor i Digitale medier og design</p>
    </article>
    )
}