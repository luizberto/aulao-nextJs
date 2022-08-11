import layout from "../components/layout";

export async function getStaticProps(){
    return{
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props){
    return(
        <layout>
            <div>
                {props.numero}
            </div>
        </layout>
    )
}