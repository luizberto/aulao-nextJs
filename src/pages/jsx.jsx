export default function JSX() {
    const a = 1
    const b = 2
    const obj = {nome: 'luiz', idade: '21'}
    return (
        <div>
            <h1>Jsx é um conceito central</h1>
            {a * b}
            
            {"muito legal".toUpperCase}

            <p>{obj.nome}</p>
        </div>
    )
}