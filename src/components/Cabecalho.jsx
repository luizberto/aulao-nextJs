import styles from '../styles/navegador.module.css'

export default (props) => {
    return (
        <header className={styles.cabecalho}>
            {props.children}
        </header>
    )
}