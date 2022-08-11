import Cabecalho from "../components/Cabecalho";
import Navegador from "../components/Navegador";

export default function Inicio() {
    return (
        <>
            <h1>Titulo</h1>

            <Cabecalho>
                <Navegador destino='/estiloso' nav="estiloso" />
                <Navegador destino='/jsx' nav='jsx' />
                <Navegador destino='/exemplo' nav='exemplo' />
                <Navegador destino='/integracao' nav='Integracao'/>
                <Navegador destino='/estatico' nav='Estatico'/>
            </Cabecalho>

        </>



    )
}