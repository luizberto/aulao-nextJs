import Link from "next/link"
import styles from '../styles/navegador.module.css'

export default (props) => {
    return (
            <Link href={props.destino}>
               <h5>{props.nav}</h5> 
            </Link>
    )
}