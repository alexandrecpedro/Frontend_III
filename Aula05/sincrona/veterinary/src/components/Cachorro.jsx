export default function Cachorro(props) {
    const { nome, idade, sexo, tamanho } = props.item;

    return (
        <ul>
            <h2>Nome: {nome}</h2>
            <li>Idade: {idade} meses </li>
            <li>Sexo: {sexo} </li>
            <li>Tamanho: {tamanho} </li>
        </ul>
    );
}