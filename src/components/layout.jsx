import Link from "next/link"

export default (props) => {
    return (
        <div>
            <Link href="/">
                voltar
            </Link>

            {props.children}
        </div>
    )
}